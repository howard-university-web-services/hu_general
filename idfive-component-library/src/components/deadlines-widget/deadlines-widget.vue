<template>
    <deadlines-widget-results :store="store" />
</template>

<script lang="ts">
import DeadlinesWidgetResults from "./deadlines-widget-results.vue";
import DeadlinesWidgetStore from "./store";

export default {
    data() {
        return {
            store: DeadlinesWidgetStore(),
        }
    },
    created() {
        // Hydrate store state with data passed through props (attributes
        // rendered by the hp_deadlines_feed paragraph template).
        this.store.state.env = this.env;
        if (!!this.category) this.store.state.selectedCategory = this.category;
        if (!!this.audience) this.store.state.selectedAudience = this.audience.split(",").filter(Boolean);
        if (!!this.school) this.store.state.selectedSchool = this.school.split(",").filter(Boolean);
        if (!!this.count) this.store.state.count = parseInt(this.count, 10);
    },
    beforeMount() {
        this.store.actions.fetchDeadlines();
    },
    props: {
        env: {
            type: String,
            required: true
        },
        category: {
            type: String
        },
        audience: {
            type: String
        },
        school: {
            type: String
        },
        count: {
            type: String
        }
    },
    components: {
        "deadlines-widget-results": DeadlinesWidgetResults
    }
};
</script>
