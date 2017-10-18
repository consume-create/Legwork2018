import Vue from 'vue';
import Router from 'vue-router';
import ContentView from '../views/ContentView.vue';

// Set Vue to use the Router
Vue.use(Router);

// Create the router and return
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/search', component: ContentView, props: true },
      { path: '/search/:project_search', component: ContentView, props: true },
      { path: '/:discipline', component: ContentView, props: true },
      { path: '/:discipline/:project', component: ContentView, props: true },
      { path: '/', component: ContentView, props: true }
    ]
  });
}
