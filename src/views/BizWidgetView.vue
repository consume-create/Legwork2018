<template>
  <div id="biz-widget" :class="slideClass">
    <div id="biz-widget-inner">
      <router-link to="?slide=wide" v-if="slideClass === 'short'">Learn More &rarr;</router-link>
      <router-link to="?slide=short" v-if="slideClass === 'wide'">&larr; Learn Less</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'biz-widget-view',
  computed: {
    slideClass () {
      return this.$store.state.bizPosition;
    }
  },
  watch: {
    '$route.query.slide'() {
      let pos = typeof this.$route.query.slide === 'undefined' ? '' : this.$route.query.slide;

      // scroll lock
      let locked = pos !== '';
      this.$store.dispatch('SET_WIN_SCROLL', {locked});

      // biz position
      this.$store.dispatch('SET_BIZ_POSITION', { pos: pos, delay: 0 });
    }
  },
  ssrInit ({ store, route }) {
    let pos = typeof route.query.slide === 'undefined' ? '' : route.query.slide;

    // scroll lock
    let locked = pos !== '';
    store.dispatch('SET_WIN_SCROLL', {locked});

    // biz position
    return store.dispatch('SET_BIZ_POSITION', { pos: pos, delay: 0 });
  }
}
</script>

<style lang="sass">
@import "src/styles/global"

#biz-widget
  position: fixed
  top: 0px
  left: 0px
  width: 100%
  height: 100%
  background-color: $black
  transform: translate3d(100%, 0%, 0)
  visibility: hidden
  overflow: scroll

  &.short
    visibility: visible
    transform: translate3d(66%, 0%, 0)

  &.wide
    visibility: visible
    transform: translate3d(0%, 0%, 0)

  #biz-widget-inner
    +grid
    position: relative
    width: 100%
    height: 500%

    a
      display: inline-block
      position: absolute
      top: 400px
      left: span(2, 24)
      font: normal normal $bold 18px/18px $base-font
      color: $white
      text-decoration: none
</style>
