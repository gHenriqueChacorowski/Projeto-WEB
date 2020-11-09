import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store';
import { VueMaskDirective } from "v-mask";
import VeeValidate from 'vee-validate';
import * as VueGoogleMaps from "vue2-google-maps";
import msg from './pt_Br';
import { key } from '../config/key';

Vue.use(VueGoogleMaps, {
  load: {
    key: key.VUE_APP_KEY
  }
});

Vue.directive("mask", VueMaskDirective);

Vue.use(VueRouter);

Vue.use(VeeValidate, {
  locale: 'pt_Br',
  dictionary: {
    pt_Br: {
      messages: msg
    }
  }
});

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
