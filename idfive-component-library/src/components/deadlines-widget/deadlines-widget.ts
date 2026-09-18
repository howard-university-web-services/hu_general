import Vue from "vue";
import DeadlinesWidget from "./deadlines-widget.vue";

export default function initDeadlinesWidget() {
    const els = document.querySelectorAll(".hp-deadlines-feed-app") as NodeListOf<HTMLElement>;
    for (let i = 0; i < els.length; i++) {
        new Vue({
            components: {
                "deadlines-widget": DeadlinesWidget
            },
            el: els[i]
        });
    }
}
