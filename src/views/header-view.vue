<template>
  <transition name="header">
    <header :key="commonClasses.join('')" :class="[commonClasses, pageClasses]">
      <router-link to="/" class="logo">
        <logo/>
      </router-link>
      <nav>
        <router-link to="/animation" class="discipline">Animation</router-link>
        <router-link to="/interactive" class="discipline">Interactive</router-link>
        <a href="#" @click.prevent="studioOrClose" class="studio">
          <label>Studio</label>
          <span id="burg-meat">X</span>
        </a>
        <slot/>
      </nav>
    </header>
  </transition>
</template>

<script>
  import {mapState} from 'vuex'
  import Logo from '../components/svg/logo.vue'

  export default {
    name: 'HeaderView',
    components: { Logo },
    computed: {
      ...mapState(['scrollPos', 'windowDim']),
      commonClasses() {
        return [
          `over-${this.page.data.theme || 'light'}-theme`,
          `${this.$route.query.overlay ? 'overlaid' : ''}`,
        ]
      },
      pageClasses() {
        return [
          `over-${this.page.id || 'default'}-page`,
          `over-${this.page.data.type || 'default'}-type`,
        ]
      },
      home() {
        return this.$store.getters['protosite/findPage']('home')
      },
    },
    watch: {
      scrollPos: { handler: 'onScroll', deep: true },
      windowDim: { handler: 'onResize', deep: true },
    },
    methods: {
      studioOrClose() {
        if (this.page.id === 'studio' || this.$route.query.overlay) {
          // This is technically incorrect; a better way would be to track
          // route changes and keep a running count to determine if it's our
          // site that we would be going back to. This is a quick fix though.
          if (window.history.length > 2) {
            return this.$router.go(-1)
          } else {
            this.$router.push('/')
          }
        } else {
          this.$router.push('/studio')
        }
      },
      onResize() {
        // set header height in the store
        // let height = this.$el.offsetHeight;
        // this.$store.commit('headerDim', { height })

        // cache minimized height
        // 84px = minimized desktop height
        // this._minimized_height = (this.$store.state.header.height - 84);
      },
      onScroll() {
        // let mode = '',
        //   y = Math.max(this.scroll[this.$store.state.activeScroll].offset, 0),
        //   direction = y < this._last_scroll ? 'up' : 'down',
        //   transform = 0
        //
        // // direction change?
        // if (direction !== this._last_direction) {
        //   this._direction_change_y = this._initial ? 0 : y
        //   this._direction_change_t = this._last_t
        // }
        //
        // // calculate style / position
        // if (y <= 0) {
        //   mode = 'top'
        //   transform = 0
        // } else {
        //   if (((y <= (this.$store.state.header.height + 1)) && direction === 'down') || (y <= this._minimized_height && direction === 'up')) {
        //     mode = 'transitioning'
        //   } else {
        //     mode = 'minimized'
        //   }
        //
        //   // on the way up, at the top, on desktop
        //   if (this.size.breakpoint === 'tablet-up' && mode === 'transitioning' && this._last_mode === 'minimized') {
        //     this._direction_change_y = this._minimized_height
        //     this._direction_change_t = -this._minimized_height
        //   }
        //
        //   // calculate reveal
        //   let scroll = this._direction_change_y - y,
        //     reveal = this._direction_change_t + scroll
        //
        //   // limit desktop reveal when minimized
        //   if (this.size.breakpoint === 'tablet-up' && mode === 'minimized') {
        //     reveal = Math.min(reveal, -this._minimized_height)
        //   }
        //
        //   // limit transform
        //   transform = Math.ceil(Math.min(0, Math.max(reveal, -(this.$store.state.header.height + 1))))
        // }
        //
        // // set it
        // this.$store.dispatch('SET_HEADER', {
        //   settings: { mode, transform },
        //   delay: 0,
        // })
        //
        // this._last_scroll = y
        // this._last_direction = direction
        // this._last_t = transform
        // this._last_mode = mode
        //
        // // initial flag
        // this._initial = false
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import "src/styles/global"

  header
    position: fixed
    z-index: 1000
    top: 0
    left: 0
    right: 0
    height: 80px
    background: $white

    a.logo
      display: inline-block
      width: 100px

    a.logo svg
      fill: $black

    a
      color: $black
      margin: 10px 20px

  header.over-dark-theme
    background: $black

    a.logo svg
      fill: $white

    a
      color: $white

  header.overlaid,
  header.over-studio-page
    a.discipline
      visibility: hidden

  // header transitions
  header.header-enter
    transform: translateX(100%)

  header.header-enter-to
    transform: translateX(0)

  header.header-leave
    transform: translateX(0)

  header.header-leave-to
    transform: translateX(-100%)

  header.header-enter-active,
  header.header-leave-active
    transition: all 250ms ease-in-out
</style>