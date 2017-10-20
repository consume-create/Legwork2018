import Vue from 'vue';
import Router from 'vue-router';
import ContentView from '../views/ContentView.vue';
import StyleGuide from '../views/StyleGuide.vue';

// Set Vue to use the Router
Vue.use(Router);

// Create the router and return
export function createRouter () {

  // Create the base router
  const _router = new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 })
  });

  // Based on environment special routes
  if( process.env.NODE_ENV != 'production' ){
    _router.addRoutes([
      { path: '/style', component: StyleGuide, props: true }
    ]);
  }

  // Default routes
  _router.addRoutes([
    { path: '/search', component: ContentView, props: true },
    { path: '/search/:project_search', component: ContentView, props: true },
    { path: '/:discipline', component: ContentView, props: true },
    { path: '/:discipline/:project', component: ContentView, props: true },
    { path: '/', component: ContentView, props: true }
  ]);

  return _router;
}
