import HeaderView from '../views/HeaderView.vue'
import ContentView from '../views/ContentView.vue'
import BizWidgetView from '../views/BizWidgetView.vue'
import FooterView from '../views/FooterView.vue'
import HeroView from '../views/HeroView.vue'
import CaseStudyView from '../views/CaseStudyView.vue'

// Set Vue to use the Router
export const ROUTES = {
  mode: 'history',
  fallback: false,
  scrollBehavior: (to, from, savedPostion) => {
    if ((to.fullPath.indexOf('?') === -1 && from.fullPath.indexOf('?') === -1)) return { x: 0, y: 0 }
    else if (savedPostion !== null) return savedPostion
    else return false
  },
  routes: [
    // {
    //   path: '/',
    //   props: true,
    //   components: { HeaderView, ContentView, BizWidgetView, FooterView, HeroView, },
    // },
    // {
    //   path: '/search',
    //   props: true,
    //   components: { HeaderView, ContentView, BizWidgetView, FooterView, HeroView, },
    // },
    // {
    //   path: '/search/:project_search',
    //   props: true,
    //   components: { HeaderView, ContentView, BizWidgetView, FooterView, HeroView, },
    // },
    // {
    //   path: '/:discipline',
    //   props: true,
    //   components: { HeaderView, ContentView, BizWidgetView, FooterView, HeroView, },
    // },
    // {
    //   path: '/:discipline/:project',
    //   props: true,
    //   components: { HeaderView, ContentView, BizWidgetView, FooterView, HeroView, CaseStudyView, },
    // },
  ],
}
