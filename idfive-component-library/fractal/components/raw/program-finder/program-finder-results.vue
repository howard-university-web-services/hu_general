<template>
    <div class="program-finder__nav-results">
        <ul v-if="successfullyFetchedResults" class="program-finder__nav-results-list">
            <li class="program-finder__nav-result" v-for="program in programs" :key="program.id">
                <a v-if="!!program.master_link && !!program.master_link.url" :href="program.master_link.url" class="program-finder__nav-course">
                    <span class="program-finder__nav-course-title">{{ program.label }}</span>
                    <span class="program-finder__nav-course-degrees">
                        {{ program.related_degrees }}
                    </span>
                    <svg class="program-finder__nav-result-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.3 12.8"><path d="M.9 12.8c.1 0 .2 0 .3-.1s.2-.1.3-.2L7 7c.2-.2.3-.4.3-.6s-.1-.5-.3-.7L1.5.2C1.3 0 1.1-.1.9-.1S.4 0 .3.2C.1.4 0 .6 0 .9s.1.5.3.6l4.9 4.9-4.9 4.9c-.2.2-.3.4-.3.7s.1.5.3.6c.1.1.2.2.3.2h.3z" /></svg>
                </a>
                <div v-else class="program-finder__nav-course">
                    <span class="program-finder__nav-course-title">{{ program.label }}</span>
                    <span class="program-finder__nav-course-degrees">
                        {{ program.related_degrees }}
                    </span>
                </div>
            </li>
        </ul>
        <div v-else class="program-finder__loader" role="presentation">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        store: {
            required: true,
        }
    },
    computed: {
        programs() {
            return this.store.state.programs;
        },
        successfullyFetchedResults() {
            return !this.store.state.fetchingPrograms && !this.store.state.errorFetchingPrograms;
        }
    }
}
</script>