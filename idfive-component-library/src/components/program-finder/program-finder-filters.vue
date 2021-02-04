<template>
    <div class="program-finder__filters">
        <div class="program-finder__filter" v-if="hasDegreeFilter">
            <label for="program-finder-degree">Degree</label>
            <select id="program-finder-degree" aria-label="Degree" @change="handleDegreeChange($event.target.value)">
                <option value="" :selected="!!selectedDegree">Select a degree</option>
                <option v-for="degree in degrees" :key="degree.id" :selected="selectedDegree == degree.id" :value="degree.id">{{ degree.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter" v-if="hasSchoolFilter">
            <label for="program-finder-school">School</label>
            <select id="program-finder-school" aria-label="School" @change="handleSchoolChange($event.target.value)">
                <option value="" :selected="!!selectedSchool">Select a school</option>
                <option v-for="school in schools" :key="school.id" :selected="selectedSchool == school.id" :value="school.id">{{ school.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter" v-if="hasSubjectFilter">
            <label for="program-finder-subject">Subject</label>
            <select id="program-finder-subject" aria-label="Subject" @change="handleSubjectChange($event.target.value)">
                <option value="" :selected="!!selectedSubject">Select a subject</option>
                <option v-for="subject in subjects" :key="subject.id" :selected="selectedSubject == subject.id" :value="subject.id">{{ subject.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter" v-if="hasProfessionFilter">
            <label for="program-finder-profession">Profession</label>
            <select id="program-finder-profession" aria-label="Profession" @change="handleProfessionChange($event.target.value)">
                <option value="" :selected="!!selectedProfession">Select a profession</option>
                <option v-for="profession in professions" :key="profession.id" :selected="selectedProfession == profession.id" :value="profession.id">{{ profession.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter" v-if="hasTypeFilter">
            <label for="program-finder-type">Type</label>
            <select id="program-finder-type" aria-label="Type" @change="handleTypeChange($event.target.value)">
                <option value="" :selected="!!selectedType">Select a type</option>
                <option v-for="type in types" :key="type.id" :selected="selectedType == type.id" :value="type.id">{{ type.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter program-finder__filter--reset">
            <button class="program-finder__filters-reset" @click="resetFilters" type="button">Reset Filters</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        store: {
            required: true,
        },
    },
    computed: {
        degrees() {
            return this.store.state.degrees;
        },
        schools() {
            return this.store.state.schools;
        },
        subjects() {
            return this.store.state.subjects;
        },
        professions() {
            return this.store.state.professions;
        },
        types() {
            return this.store.state.types;
        },
        selectedDegree() {
            return this.store.state.selectedDegree;
        },
        selectedSchool() {
            return this.store.state.selectedSchool;
        },
        selectedSubject() {
            return this.store.state.selectedSubject;
        },
        selectedProfession() {
            return this.store.state.selectedProfession;
        },
        selectedType() {
            return this.store.state.selectedType;
        },
        hasDegreeFilter() {
            return this.store.state.hasDegreeFilter;
        },
        hasSchoolFilter() {
            return this.store.state.hasSchoolFilter;
        },
        hasSubjectFilter() {
            return this.store.state.hasSubjectFilter;
        },
        hasProfessionFilter() {
            return this.store.state.hasProfessionFilter;
        },
        hasTypeFilter() {
            return this.store.state.hasTypeFilter;
        }
    },
    methods: {
        handleDegreeChange(degree) {
            this.store.state.selectedDegree = degree;
        },
        handleSchoolChange(school) {
            this.store.state.selectedSchool = school;
        },
        handleSubjectChange(subject) {
            this.store.state.selectedSubject = subject;
        },
        handleProfessionChange(prof) {
            this.store.state.selectedProfession = prof;
        },
        handleTypeChange(type) {
            this.store.state.selectedType = type;
        },
        resetFilters() {
            this.store.actions.resetFilters();
        }
    }
}
</script>
