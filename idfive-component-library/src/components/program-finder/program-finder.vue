<template>
    <div class="program-finder__nav">
        <program-finder-filters v-if="!noFilters && successfullyFetchedFilters" />
        <program-finder-results v-if="!noResultsFound" />
        <div v-else class="program-finder__nav-no-results">No programs found, please try another search using different criteria.</div>
    </div>
</template>

<script lang="ts">
import ProgramFinderFilters from "./program-finder-filters.vue";
import ProgramFinderResults from "./program-finder-results.vue";
import { state, actions, getters } from "./store";

export default {
    created() {
        // Hydrate store state with data passed through props
        state.env = this.env;
        if (!!this.degree) state.selectedDegree = this.degree;
        if (!!this.school) state.selectedSchool = this.school;
        if (!!this.subject) state.selectedSubject = this.subject;
        state.hasDegreeFilter = this.degreeFilter;
        state.hasSchoolFilter = this.schoolFilter;
        state.hasSubjectFilter = this.subjectFilter;
    },
    beforeMount() {
        // Initially fetch programs and filter data from API
        actions.fetchProgramData();
        actions.fetchFilterData();
    },
    props: {
        env: {
            type: String,
            required: true
        },
        degree: {
            type: String
        },
        school: {
            type: String
        },
        subject: {
            type: String
        },
        degreeFilter: {
            type: Boolean,
            default: true
        },
        schoolFilter: {
            type: Boolean,
            default: true
        },
        subjectFilter: {
            type: Boolean,
            default: true
        }
    },
    components: {
        "program-finder-filters": ProgramFinderFilters,
        "program-finder-results": ProgramFinderResults
    },
    computed: {
        selectedDegree() {
            return state.selectedDegree;
        },
        selectedSchool() {
            return state.selectedSchool;
        },
        selectedSubject() {
            return state.selectedSubject;
        },
        noResultsFound() {
            return !state.fetchingPrograms && state.programs.length === 0;
        },
        successfullyFetchedFilters() {
            return !state.fetchingFilters && !state.errorFetchingFilters;
        },
        noFilters() {
            return getters.noFilters();
        }
    },
    watch: {
        selectedDegree() {
            actions.fetchProgramData();
        },
        selectedSchool() {
            actions.fetchProgramData();
        },
        selectedSubject() {
            actions.fetchProgramData();
        }
    }
}
</script>