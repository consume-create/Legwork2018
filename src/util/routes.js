import {Resolver} from '@legwork/vue-protosite'

// the timing needs to be handled for the page transitions
let timeout = null

// disable the scroll behavior in browsers so we can override it
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// export the router settings and base routes
export const ROUTES = {
  mode: 'history',
  fallback: false,
  // TODO: scroll behavior isn't fully baked and needs to change to using an animation event.
  scrollBehavior(to, from, savedPosition) {
    const position = savedPosition || { x: 0, y: 0 }
    let delay = 333

    if (to.query.overlay) return false
    if (from.query.overlay) delay = 15

    return new Promise((resolve, reject) => {
      // console.log(position)
      timeout && clearTimeout(timeout)
      // the timing of this is based on page transition time
      timeout = setTimeout(() => resolve(position), delay)
    })
  },
  routes: [
    { path: '*', component: Resolver, meta: { page: 'error_404' } },
  ],
}
