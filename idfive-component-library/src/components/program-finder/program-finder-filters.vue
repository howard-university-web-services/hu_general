<template>
    <div class="program-finder__filters">
        <div class="program-finder__filter">
            <label for="program-finder-degree">Degree</label>
            <select id="program-finder-degree" aria-label="Degree" @change="handleDegreeChange($event.target.value)">
                <option value="" :selected="!!selectedDegree">Select a degree</option>
                <option v-for="degree in degrees" :key="degree.id" :selected="selectedDegree == degree.id" :value="degree.id">{{ degree.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter">
            <label for="program-finder-school">School</label>
            <select id="program-finder-school" aria-label="School" @change="handleSchoolChange($event.target.value)">
                <option value="" :selected="!!selectedSchool">Select a school</option>
                <option v-for="school in schools" :key="school.id" :selected="selectedSchool == school.id" :value="school.id">{{ school.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter">
            <label for="program-finder-subject">Subject</label>
            <select id="program-finder-subject" aria-label="Subject" @change="handleSubjectChange($event.target.value)">
                <option value="" :selected="!!selectedSubject">Select a subject</option>
                <option v-for="subject in subjects" :key="subject.id" :selected="selectedSubject == subject.id" :value="subject.id">{{ subject.label }}</option>
            </select>
        </div>
        <div class="program-finder__filter program-finder__filter--reset">
            <button class="program-finder__filters-reset" @click="resetFilters" type="button">Reset Filters</button>
        </div>
    </div>
</template>

<script lang="ts">
import { state, actions } from "./store";

export default {
    computed: {
        degrees() {
            return state.degrees;
        },
        schools() {
            return state.schools;
        },
        subjects() {
            return state.subjects;
        },
        selectedDegree() {
            return state.selectedDegree;
        },
        selectedSchool() {
            return state.selectedSchool;
        },
        selectedSubject() {
            return state.selectedSubject;
        }
    },
    methods: {
        handleDegreeChange(degree) {
            state.selectedDegree = degree;
        },
        handleSchoolChange(school) {
            state.selectedSchool = school;
        },
        handleSubjectChange(subject) {
            state.selectedSubject = subject;
        },
        resetFilters() {
            actions.resetFilters();
        }
    }
}
</script>