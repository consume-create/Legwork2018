<template>
  <div id="biz-widget" :class="slideClass" @scroll="onBizWidgetScroll">
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

      // setup if open
      if(pos !== '') {
        // scroll lock
        let locked = true;
        this.$store.dispatch('SET_WIN_SCROLL', {locked});

        // active scroll
        this.$store.dispatch('SET_ACTIVE_SCROLL', 'bizWidget');

        // header theme
        let theme = 'light';
        this.$store.dispatch('SET_HEADER', {
          settings: {theme},
          delay: 0
        });
      } else {
        // TODO: somewhere else / cleanup?
        // scroll lock
        let locked = false;
        this.$store.dispatch('SET_WIN_SCROLL', {locked});

        // header theme
        let theme = 'dark';
        this.$store.dispatch('SET_HEADER', {
          settings: {theme},
          delay: 0
        });
      }

      // biz position
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
      this.$store.dispatch('SET_BIZ_WIDGET_SCROLL', {offset});
    }
  },
  ssrInit ({ store, route }) {
    let pos = typeof route.query.slide === 'undefined' ? '' : route.query.slide;

    // setup if open
    if(pos !== '') {
      // scroll lock
      let locked = true;
      store.dispatch('SET_WIN_SCROLL', {locked});

      // active scroll
      store.dispatch('SET_ACTIVE_SCROLL', 'bizWidget');

      // header theme
      let theme = 'light';
      store.dispatch('SET_HEADER', {
        settings: {theme},
        delay: 0
      });
    }

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
  background-color: #ccc
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
