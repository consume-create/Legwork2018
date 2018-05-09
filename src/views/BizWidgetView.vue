<template>
  <div id="biz-widget" :class="slideClass" @scroll="onBizWidgetScroll">
    <div class="biz-widget-toggle">
      <router-link to="?slide=wide" v-if="slideClass === 'short'">Learn More &rarr;</router-link>
      <router-link to="?slide=short" v-if="slideClass === 'wide'">&larr; Learn Less</router-link>
    </div>
    <studio-about></studio-about>
  </div>
</template>

<script>

import StudioAbout from 'components/editorial/StudioAboutContent.vue';


export default {
  name: 'biz-widget-view',
  components: {
    StudioAbout
  },
  computed: {
    slideClass () {
      return this.$store.state.bizPosition;
    }
  },
  watch: {
    '$route.query.slide'() {
      // biz position
      let pos = typeof this.$route.query.slide === 'undefined' ? '' : this.$route.query.slide;
      this.$store.dispatch('SET_BIZ_POSITION', { pos: pos, delay: 0 });
    }
  },
  methods: {
    /*
    ------------------------------------------
    | onBizWidgetScroll:void
    |
    | e:object - event object
    |
    | Handle biz widget scroll.
    ------------------------------------------ */
    onBizWidgetScroll(e) {
      // set biz widget scroll in the store
      let offset = e.srcElement.scrollTop;
      this.$store.dispatch('SET_STUDIO_SCROLL', {offset});
    }
  },
  ssrInit ({ store, route }) {
    // biz position
    let pos = typeof route.query.slide === 'undefined' ? '' : route.query.slide;
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
  background-color: $color-bg-body
  color: $color-text
  transform: translate3d(100%, 0%, 0)
  visibility: hidden
  overflow: scroll

  &.short
    visibility: visible
    transform: translate3d(66%, 0%, 0)
    overflow: hidden

  &.wide
    visibility: visible
    transform: translate3d(0%, 0%, 0)

  .biz-widget-toggle
    position: absolute
    top: 8em
    left: 2em
    z-index: 10

  .studio-about
    padding-top: 11em
</style>
