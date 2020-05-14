import Vue from "vue";
import axios from "axios";

export default function ProgramFinderStore() {
    const state = Vue.observable({
        programs: [],
        degrees: [],
        schools: [],
        subjects: [],
        selectedDegree: null,
        selectedSchool: null,
        selectedSubject: null,
        env: null,
        fetchingPrograms: true,
        errorFetchingPrograms: false,
        fetchingFilters: true,
        errorFetchingFilters: false,
        hasDegreeFilter: false,
        hasSchoolFilter: false,
        hasSubjectFilter: false
    });

    const getters = {
        apiBase() {
            const protocol = `http${state.env === "prod" ? "s" : ""}:`;
            const hostname = `${state.env !== "prod" ? `${state.env}.` : ""}programs.howard.edu`;

            return `${protocol}//${hostname}/api`;
        },
        noFilters() {
            return !state.hasDegreeFilter && !state.hasSchoolFilter && !state.hasSubjectFilter;
        }
    };

    const actions = {
        fetchProgramData() {
            const params = { "sort": "label" };

            if (!!state.selectedDegree) {
                params["filter[degree_classification][value][]"] = state.selectedDegree;
            }

            if (!!state.selectedSchool) {
                params["filter[related_school][value][]"] = state.selectedSchool;
            }

            if (!!state.selectedSubject) {
                params["filter[program_subject][value][]"] = state.selectedSubject;
            }

            state.fetchingPrograms = true;
            return axios
                .get(`${getters.apiBase()}/programs`, {
                    params
                })
                .then(response => {
                    /* We have to replace the programs in state on each request
                    * because there's no way to relate program data back to
                    * schools or subjects.
                    */
                    state.programs = response.data.data;
                    state.fetchingPrograms = false;
                })
                .catch(error => {
                    state.fetchingPrograms = false;
                    state.errorFetchingPrograms = true;
                });
        },
        fetchFilterData() {
            if (!getters.noFilters()) {
                const filtersToFetch = [];

                if (state.hasDegreeFilter) {
                    filtersToFetch.push({
                        name: "degrees",
                        endpoint: `${getters.apiBase()}/degree_classification`
                    });
                }

                if (state.hasSchoolFilter) {
                    filtersToFetch.push({
                        name: "schools",
                        endpoint: `${getters.apiBase()}/schools`
                    });
                }

                if (state.hasSubjectFilter) {
                    filtersToFetch.push({
                        name: "subjects",
                        endpoint: `${getters.apiBase()}/subjects`
                    });
                }

                state.fetchingFilters = true;

                return axios.all(filtersToFetch.map((filter) => axios.get(filter.endpoint)))
                    .then(axios.spread((...responses) => {
                        responses.forEach((response, i) => {
                            state[filtersToFetch[i].name] = response.data.data;
                        });
                        state.fetchingFilters = false;
                    }))
                    .catch(error => {
                        console.error(error);
                        state.fetchingFilters = false;
                        state.errorFetchingFilters = true;
                    });
            }
        },
        resetFilters() {
            state.selectedDegree = null;
            state.selectedSchool = null;
            state.selectedSubject = null;
        }
    };

    return {
        state,
        getters,
        actions
    };
};