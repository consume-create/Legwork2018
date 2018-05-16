import Vue from 'vue';
import Router from 'vue-router';
import HeaderView from '../views/HeaderView.vue';
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
    scrollBehavior: (to, from, savedPostion) => {
      if((to.fullPath.indexOf('?') === -1 && from.fullPath.indexOf('?') === -1)) return {x: 0, y: 0};
      else if (savedPostion !== null) return savedPostion;
      else return false;
    }
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
      path: '/search/:project_search',
      components: {
        HeaderView,
        ContentView,
        BizWidgetView,
        FooterView,
        HeroView
      },
      props: true
    },
    {
      path: '/search',
      components: {
        HeaderView,
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
        HeaderView,
        ContentView,
        BizWidgetView,
        FooterView,
        HeroView,
        CaseStudyView
      },
      props: true
    },
    {
      path: '/:discipline',
      components: {
        HeaderView,
        ContentView,
        BizWidgetView,
        FooterView,
        HeroView
      },
      props: true
    },
    {
      path: '/',
      components: {
        HeaderView,
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
