import Vue from 'vue';
import Router from 'vue-router';
import IndexView from '../views/IndexView.vue';

Vue.use(Router);

// route-level code splitting
// const IndexView = import('../views/IndexView.vue');

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: IndexView }
    ]
  });
}
