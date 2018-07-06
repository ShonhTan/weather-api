import Vue from 'vue';
import Router from 'vue-router';
import ShowToday from '@/components/ShowToday.vue';
import ShowNext from '@/components/ShowNext.vue';
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: ShowToday },
    { path: '/next', component: ShowNext }
  ]
})
