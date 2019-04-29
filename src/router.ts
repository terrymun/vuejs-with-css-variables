import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/vuejs-with-css-variables/' : process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/icon-styling',
      name: 'icon-styling',
      component: () => import(/* webpackChunkName: "icon-styling" */ './views/IconStyling.vue'),
    },
    {
      path: '/themeing',
      name: 'themeing',
      component: () => import(/* webpackChunkName: "themeing" */ './views/Themeing.vue'),
    },
  ],
});
