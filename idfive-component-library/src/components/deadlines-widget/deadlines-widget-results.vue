<template>
    <div class="deadlines-widget">
        <div v-if="fetching" class="deadlines-widget__loader" role="presentation">Loading deadlines&hellip;</div>
        <div v-else-if="noResultsFound" class="deadlines-widget__no-results">
            <p>No upcoming dates or deadlines at this time.</p>
            <a :href="siteUrl" class="deadlines-widget__no-results-link">View all Howard dates and deadlines</a>
        </div>
        <ul v-else class="deadlines-widget__items">
            <li class="deadlines-widget__item" v-for="deadline in deadlines" :key="deadline.id">
                <span class="deadlines-widget__item-badge">{{ formatBadge(deadline) }}</span>
                <div class="deadlines-widget__item-body">
                    <h3 class="deadlines-widget__item-title header--h3-small">
                        <a v-if="deadline.links[0]" :href="deadline.links[0].href">{{ deadline.title }}</a>
                        <template v-else>{{ deadline.title }}</template>
                    </h3>

                    <!-- Fulfills the wireframe's "subtitle" slot (e.g. "Summer
                         Session 1") - display-only, not a filter, per the
                         widget spec. -->
                    <span v-if="deadline.academicTerm" class="deadlines-widget__item-term">{{ deadline.academicTerm }}</span>

                    <!-- FLAGGED: the wireframe shows what looks like two links per
                         item, but field_hc_deadline_link only carries one value. -->
                    <a v-for="(link, i) in deadline.links" :key="i" :href="link.href" class="fancy-link fancy-link--dark">
                        <span>{{ link.title || "Learn more" }}</span>
                        <span class="icon-arrow-right"></span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        store: {
            type: Object,
            required: true
        }
    },
    computed: {
        fetching() {
            return this.store.state.fetchingDeadlines;
        },
        deadlines() {
            return this.store.state.deadlines;
        },
        noResultsFound() {
            return !this.fetching && this.deadlines.length === 0;
        },
        siteUrl() {
            return this.store.getters.siteUrl();
        }
    },
    methods: {
        // "Opens at [time]" badge from the spec depends on a Time field
        // that doesn't exist on hc_deadline yet (FLAGGED - unsupported by
        // the current endpoint) - so this only ever renders a date or
        // date range, never a time.
        formatBadge(deadline) {
            const start = this.formatShortDate(deadline.startDate);
            if (deadline.endDate && deadline.endDate !== deadline.startDate) {
                return `${start} - ${this.formatShortDate(deadline.endDate)}`;
            }
            return start;
        },
        formatShortDate(isoDate) {
            if (!isoDate) return "";
            // isoDate comes back as YYYY-MM-DD; parse as local to avoid
            // timezone off-by-one shifting the displayed day.
            const [year, month, day] = isoDate.split("-").map(Number);
            return new Date(year, month - 1, day).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            });
        }
    }
};
</script>
