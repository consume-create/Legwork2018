import {Resolver} from '@legwork/vue-protosite'

// disable the scroll behavior in browsers so we can override it
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// export the router settings and base routes
export const ROUTES = {
  mode: 'history',
  fallback: false,
  scrollBehavior: () => null, // real behavior is in App.vue
  routes: [
    { path: '*', component: Resolver, meta: { page: 'error_404' } },
  ],
}
