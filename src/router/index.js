import Vue from 'vue';
import Router from 'vue-router';
import ContentView from '../views/ContentView.vue';
import BizWidgetView from '../views/BizWidgetView.vue';
import FooterView from '../views/FooterView.vue';
import HeroView from '../views/HeroView.vue';
import StyleGuide from '../views/StyleGuide.vue';
import CaseStudyView from '../views/CaseStudyView.vue';

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
    { 
      path: '/search',
      components: {
        ContentView,
        BizWidgetView,
        FooterView,
        HeroView
      },
      props: true 
    },
    { 
      path: '/search/:project_search',
      components: {
        ContentView, 
        BizWidgetView,
        FooterView,
        HeroView
      }, 
      props: true 
    },
    { 
      path: '/:discipline',
      components: {
        ContentView, 
        BizWidgetView,
        FooterView,
        HeroView
      }, 
      props: true 
    },
    { 
      path: '/:discipline/:project', 
      components: {
        ContentView, 
        BizWidgetView,
        FooterView,
        HeroView,
        CaseStudyView
      }, 
      props: true 
    },
    { 
      path: '/', 
      components: {
        ContentView, 
        BizWidgetView,
        FooterView,
        HeroView
      }, 
      props: true 
    }
  ]);

  return _router;
}
