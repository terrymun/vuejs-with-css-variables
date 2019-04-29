import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  base: process.env.NODE_ENV === 'production' ? '/vuejs-with-css-variables/' : process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pseudo-element-styling',
      name: 'pseudo-element-styling',
      component: () => import(/* webpackChunkName: "pseudo-element-styling" */ './views/PseudoElementStyling.vue'),
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
