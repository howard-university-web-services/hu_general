import Vue from "vue";
import axios from "axios";

export default function DeadlinesWidgetStore() {
    const state = Vue.observable({
        deadlines: [],
        selectedCategory: null,
        selectedAudience: [],
        selectedSchool: [],
        count: 5,
        env: null,
        fetchingDeadlines: true,
        errorFetchingDeadlines: false
    });

    const getters = {
        // Requests go through a same-origin Drupal proxy route rather than
        // hitting deadlines.howard.edu directly from the browser - stg
        // requires basic auth and has a bad SSL cert, neither of which a
        // browser XHR can work around (see DeadlinesProxyController).
        apiBase() {
            return "/hp-deadlines-feed/proxy";
        },
        // Public-facing link to the Deadlines site itself (for the "view
        // all" fallback link), not used for the proxy request above.
        siteUrl() {
            const hostname = `${state.env !== "prod" ? `${state.env}.` : ""}deadlines.howard.edu`;
            return `https://${hostname}`;
        }
    };

    const actions = {
        fetchDeadlines() {
            const today = new Date().toISOString().slice(0, 10);
            const params = {
                "env": state.env,
                "filter[status][value]": 1,
                // "Upcoming" is always applied: end date in the future, OR no
                // end date and a start date in the future.
                "filter[upcoming][group][conjunction]": "OR",
                "filter[range][condition][path]": "field_hc_deadline_end_date",
                "filter[range][condition][operator]": ">=",
                "filter[range][condition][value]": today,
                "filter[range][condition][memberOf]": "upcoming",
                "filter[single][group][conjunction]": "AND",
                "filter[single][group][memberOf]": "upcoming",
                "filter[no-end][condition][path]": "field_hc_deadline_end_date",
                "filter[no-end][condition][operator]": "IS NULL",
                "filter[no-end][condition][memberOf]": "single",
                "filter[future-start][condition][path]": "field_hc_deadline_start_date",
                "filter[future-start][condition][operator]": ">=",
                "filter[future-start][condition][value]": today,
                "filter[future-start][condition][memberOf]": "single",
                "sort": "field_hc_deadline_start_date",
                "page[limit]": state.count,
                // NOTE: Academic Term is never used as a *filter* per the
                // widget spec (upcoming-only list would empty out once a
                // new term starts) - but it's still included here so it can
                // be shown as informational text on each item.
                "include": "field_hc_deadline_category,field_hc_deadline_audience,field_hc_deadline_academic_term"
            };

            if (!!state.selectedCategory) {
                params["filter[field_hc_deadline_category.id][value]"] = state.selectedCategory;
            }

            if (state.selectedAudience.length === 1) {
                params["filter[field_hc_deadline_audience.id][value]"] = state.selectedAudience[0];
            }
            else if (state.selectedAudience.length > 1) {
                params["filter[audience][condition][path]"] = "field_hc_deadline_audience.id";
                params["filter[audience][condition][operator]"] = "IN";
                params["filter[audience][condition][value][]"] = state.selectedAudience;
            }

            // field_hc_deadline_school is a plain field (not a taxonomy
            // relationship like Category/Audience), storing literal
            // "id=<tid>" strings - so it's filtered directly on the field
            // path, with no ".id" suffix.
            if (state.selectedSchool.length === 1) {
                params["filter[field_hc_deadline_school][value]"] = state.selectedSchool[0];
            }
            else if (state.selectedSchool.length > 1) {
                params["filter[school][condition][path]"] = "field_hc_deadline_school";
                params["filter[school][condition][operator]"] = "IN";
                params["filter[school][condition][value][]"] = state.selectedSchool;
            }

            state.fetchingDeadlines = true;

            return axios
                .get(getters.apiBase(), { params })
                .then(response => {
                    state.deadlines = mapDeadlines(response.data);
                    state.fetchingDeadlines = false;
                })
                .catch(error => {
                    state.fetchingDeadlines = false;
                    state.errorFetchingDeadlines = true;
                });
        }
    };

    /**
     * Flattens the JSON:API response (including the included taxonomy terms)
     * into a simple array of plain deadline objects for the template.
     */
    function mapDeadlines(response) {
        const included = response.included || [];
        const findIncluded = (relationship) => {
            if (!relationship || !relationship.data) return [];
            const refs = Array.isArray(relationship.data) ? relationship.data : [relationship.data];
            return refs
                .map(ref => included.find(item => item.type === ref.type && item.id === ref.id))
                .filter(Boolean)
                .map(item => item.attributes.name);
        };
        // Confirmed via populated test content: field_hc_deadline_link is a
        // single link object, not an array, and internal references come
        // back as uri: "entity:node/6" (not a usable href) with the real
        // path in resolvable_uri. Normalized to {href, title} here, and
        // still wrapped in an array in case a second link field gets added
        // later - FLAGGED: the wireframe shows what looks like two links
        // per item, but the content type only exposes one.
        const linkValues = (field) => {
            if (!field) return [];
            const links = Array.isArray(field) ? field : [field];
            return links.map(link => ({
                href: link.resolvable_uri || link.uri,
                title: link.title
            }));
        };

        return (response.data || []).map(node => ({
            id: node.id,
            title: node.attributes.title,
            // Fulfills the wireframe's "subtitle" slot (e.g. "Summer Session
            // 1") - display-only, not a filter. field_hc_deadline_summary
            // is not used by this widget.
            academicTerm: findIncluded(node.relationships.field_hc_deadline_academic_term)[0] || null,
            startDate: node.attributes.field_hc_deadline_start_date,
            endDate: node.attributes.field_hc_deadline_end_date,
            links: linkValues(node.attributes.field_hc_deadline_link),
            categories: findIncluded(node.relationships.field_hc_deadline_category),
            audiences: findIncluded(node.relationships.field_hc_deadline_audience)
        }));
    }

    return {
        state,
        getters,
        actions
    };
}
