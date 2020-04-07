import Vue from "vue";
import ProgramFinder from "./program-finder.vue";

export default function initProgramFinder() {
    const els = document.querySelectorAll(".program-finder-app") as NodeListOf<HTMLElement>;
    for (let i = 0; i < els.length; i++) {
        new Vue({
            components: {
                "program-finder": ProgramFinder
            },
            el: els[i]
        });
    }
}