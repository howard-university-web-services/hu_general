import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
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
    errorFetchingFilters: false
});

export const getters = {
    apiBase() {
        const protocol = `http${ state.env === "prod" ? "s" : "" }:`;
        const hostname = `${ state.env !== "prod" ? `${ state.env }.` : "" }programs.howard.edu`;
        
        return `${protocol}//${hostname}/api`;
    }
};

export const actions = {
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
        this.fetchingFilters = true;
        return axios.all([
            axios.get(`${getters.apiBase()}/degree_classification`),
            axios.get(`${getters.apiBase()}/schools`),
            axios.get(`${getters.apiBase()}/subjects`)
        ])
            .then(axios.spread((degrees, schools, subjects) => {
                state.degrees = degrees.data.data;
                state.schools = schools.data.data;
                state.subjects = subjects.data.data;
                state.fetchingFilters = false;
            }))
            .catch(error => {
                state.fetchingFilters = false;
                state.errorFetchingFilters = true;
            });
    },
    resetFilters() {
        state.selectedDegree = null;
        state.selectedSchool = null;
        state.selectedSubject = null;
    }
};