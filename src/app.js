import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueProtosite from '@legwork/vue-protosite'

import {STORE} from './store'
import {ROUTES} from './util/routes'
import * as mixins from './util/mixins'
import * as filters from './util/filters'

import App from './App.vue'
import StyleGuide from './views/StyleGuide.vue'

// tell vue what to use
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueProtosite)

// register global utility mixins
Object.keys(mixins).forEach((key) => Vue.mixin(mixins[key]))

// register global utility filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// setup vuex
const store = new Vuex.Store(STORE)

// setup the router
const router = new VueRouter(ROUTES)
if (process.env.NODE_ENV !== 'production') {
  router.addRoutes([{ path: '/style', component: StyleGuide, props: true }])
}

// setup protosite
const protosite = new VueProtosite({ store, router, logger: () => null })

export function createApp() {
  // create the app instance
  const app = new Vue({ router, store, protosite, render: (h) => h(App) })

  // expose the app, the router and the store
  return { app, router, store }
}
