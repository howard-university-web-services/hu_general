<template>
    <div class="program-finder__nav">
        <program-finder-filters :store="store" v-if="!noFilters && successfullyFetchedFilters" />
        <program-finder-results :store="store" v-if="!noResultsFound" />
        <div v-else class="program-finder__nav-no-results">No programs found, please try another search using different criteria.</div>
    </div>
</template>

<script lang="ts">
import ProgramFinderFilters from "./program-finder-filters.vue";
import ProgramFinderResults from "./program-finder-results.vue";
import ProgramFinderStore from "./store";

export default {
    data() {
        return {
            store: ProgramFinderStore(),
        }
    },
    created() {
        // Hydrate store state with data passed through props
        this.store.state.env = this.env;
        if (!!this.degree) this.store.state.selectedDegree = this.degree;
        if (!!this.school) this.store.state.selectedSchool = this.school;
        if (!!this.subject) this.store.state.selectedSubject = this.subject;
        this.store.state.hasDegreeFilter = this.degreeFilter;
        this.store.state.hasSchoolFilter = this.schoolFilter;
        this.store.state.hasSubjectFilter = this.subjectFilter;
    },
    beforeMount() {
        // Initially fetch programs and filter data from API
        this.store.actions.fetchProgramData();
        this.store.actions.fetchFilterData();
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
            return this.store.state.selectedDegree;
        },
        selectedSchool() {
            return this.store.state.selectedSchool;
        },
        selectedSubject() {
            return this.store.state.selectedSubject;
        },
        noResultsFound() {
            return !this.store.state.fetchingPrograms && this.store.state.programs.length === 0;
        },
        successfullyFetchedFilters() {
            return !this.store.state.fetchingFilters && !this.store.state.errorFetchingFilters;
        },
        noFilters() {
            return this.store.getters.noFilters();
        }
    },
    watch: {
        selectedDegree() {
            this.store.actions.fetchProgramData();
        },
        selectedSchool() {
            this.store.actions.fetchProgramData();
        },
        selectedSubject() {
            this.store.actions.fetchProgramData();
        }
    }
}
</script>