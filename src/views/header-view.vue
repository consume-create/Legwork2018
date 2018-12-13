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
          if (this.$store.state.route.from) {
            return this.$router.go(-1)
          } else {
            this.$router.push('/')
          }
        } else {
          this.$router.push('/studio')
        }
      },
      onResize() {
        // console.log('onResize')
      },
      onScroll() {
        // console.log('onScroll')
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
  header.over-studio-page,
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