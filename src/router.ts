import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  base: process.env.NODE_ENV === 'production' ? '/vuejs-with-css-variables/' : process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Supercharging VueJS with CSS variables',
      },
    },
    {
      path: '/color-manipulation',
      name: 'color-manipulation',
      component: () => import(/* webpackChunkName: "color-manipulation" */ './views/ColorManipulation.vue'),
      meta: {
        title: 'Color manipulation',
      },
    },
    {
      path: '/icon-styling',
      name: 'icon-styling',
      component: () => import(/* webpackChunkName: "icon-styling" */ './views/IconStyling.vue'),
      meta: {
        title: 'Icon styling',
      },
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import(/* webpackChunkName: "layout" */ './views/Layout.vue'),
      meta: {
        title: 'Layout',
      },
    },
    {
      path: '/pseudo-element-styling',
      name: 'pseudo-element-styling',
      component: () => import(/* webpackChunkName: "pseudo-element-styling" */ './views/PseudoElementStyling.vue'),
      meta: {
        title: 'Pseudo-element styling',
      },
    },
    {
      path: '/themeing',
      name: 'themeing',
      component: () => import(/* webpackChunkName: "themeing" */ './views/Themeing.vue'),
      meta: {
        title: 'Themeing styling',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
