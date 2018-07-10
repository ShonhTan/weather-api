import Vue from 'vue';
import Router from 'vue-router';
import ShowToday from '@/views/ShowToday.vue';
import ShowNext from '@/views/ShowNext.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: ShowToday },
    { path: '/next', component: ShowNext }
  ]
})
