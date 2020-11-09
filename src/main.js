import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store';
import { VueMaskDirective } from "v-mask";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDAw-lcdJqdTXFyz5CovHnQyzl9uss-gk0"
  }
});

Vue.directive("mask", VueMaskDirective);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
