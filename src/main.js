import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import i18n from './localisation.js';
import router from './router.js';
Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  render: h => h(App),
  i18n, router
}).$mount('#app');
