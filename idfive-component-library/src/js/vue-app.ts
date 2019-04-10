import Vue from "vue";
import exampleComponent from './example.component.vue';

let vueApp = new Vue({
  el: '#vue-app',
  components: {
    'example-component': exampleComponent
  }
});

export default vueApp;
