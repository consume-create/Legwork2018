<template>
  <section id="app" class="application" :class="{overlay}">
    <header-view/>
    <transition name="page">
      <router-view :key="$route.path"/>
    </transition>
    <transition name="overlay">
      <keep-alive>
        <component ref="overlay" :is="overlay"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  import HeaderView from './header-view.vue'
  import SearchOverlay from './search-overlay.vue'
  import WatchOverlay from './watch-overlay.vue'
  import PowerlistOverlay from './powerlist-overlay.vue'

  let timeout = null

  export default {
    name: 'App',
    components: { HeaderView, SearchOverlay, WatchOverlay, PowerlistOverlay },
    data() {
      return {
        transitionSpeed: 333,
      }
    },
    mounted() {
      this.$router.options.scrollBehavior = this.scrollBehavior
      window.addEventListener('resize', this.windowResize())
      window.addEventListener('scroll', this.windowScroll())
    },
    computed: {
      overlay() {
        const overlay = this.$route.query.overlay
        return overlay ? `${overlay}-overlay` : null
      },
    },
    methods: {
      windowResize() {
        const width = window.innerWidth
        const height = window.innerHeight
        this.$store.commit('windowDim', { width, height })
        return this.windowResize
      },
      windowScroll() {
        const y = window.pageYOffset
        const x = window.pageXOffset
        this.$store.commit('scrollPos', { x, y })
        return this.windowScroll
      },
      scrollBehavior(to, from, savedPosition) {
        const position = savedPosition || { x: 0, y: 0 }
        if (to.query.overlay) return false
        return new Promise((resolve) => {
          const delay = from.query.overlay ? 15 : this.transitionSpeed
          timeout && clearTimeout(timeout)
          timeout = this.delay(delay, () => resolve(position))
        })
      },
    },
  }
</script>

<style lang="sass">
  @import 'src/styles/reset'
  @import 'src/styles/global'
  @import 'src/styles/animations'
  @import 'src/styles/types'

  html,
  body
    width: 100%
    height: 100%
    margin: 0
    padding: 0

  body
    background-color: $faded
    color: $color-text
    -webkit-font-smoothing: antialiased
    -webkit-text-size-adjust: none
    font: normal normal 18px/1.8 "neuzeit-grotesk", san-serif

  section#app.application
    width: 100%
    height: 100%

  // page transition
  section.page-enter
    opacity: 0

  section.page-enter-to
    opacity: 1

  section.page-leave
    opacity: 1

  section.page-leave-to
    opacity: 0

  section.page-enter-active,
  section.page-leave-active
    position: absolute
    width: 100%
    transition: all $fast ease-in-out

  section.page-enter-active
    transition-delay: $fast

  // shared article styles
  article.overlay
    position: fixed
    z-index: 90
    top: 0
    left: 0
    width: 100%
    height: 100vh
    padding-top: 100px
    box-sizing: border-box
    background-color: $faded

  // article transition
  article.overlay-enter
    opacity: 0

  article.overlay-enter-to
    opacity: 1

  article.overlay-leave
    opacity: 1

  article.overlay-leave-to
    opacity: 0

  article.overlay-enter-active,
  article.overlay-leave-active
    transition: all $fast ease-in-out
</style>
