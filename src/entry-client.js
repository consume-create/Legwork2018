import Vue from 'vue/dist/vue.js'
import {createApp} from './application'

// Client side plugins
import vueVimeoPlayer from 'vue-vimeo-player'
import picturefill from 'picturefill'
import * as PIXI from 'pixi.js'

Vue.use(vueVimeoPlayer)

const { app } = createApp(({ store }) => {
  store.replaceState(window.__INITIAL_STATE__)
})

app.$mount('#app')
