<template>
  <div id="overlay" :class="[shown, kind]" @scroll="onOverlayScroll">
    <search-overlay v-if="kind === 'search'"></search-overlay>
    <watch-overlay v-if="kind === 'watch'"></watch-overlay>
    <powerlist-overlay v-if="kind === 'powerlist'"></powerlist-overlay>
  </div>
</template>

<script>
import SearchOverlay from 'components/SearchOverlay.vue';
import WatchOverlay from 'components/WatchOverlay.vue';
import PowerlistOverlay from 'components/PowerlistOverlay.vue';

export default {
  name: 'overlay-view',

  /*
  ------------------------------------------
  | components:void (-)
  ------------------------------------------ */
  components: {
    SearchOverlay,
    WatchOverlay,
    PowerlistOverlay
  },

  computed: {
    shown() {
      return this.$store.state.overlay.shown ? 'shown' : '';
    },
    kind() {
      return this.$store.state.overlay.kind;
    }
  },
  watch: {
    '$route.query.overlay'() {
      let shown = false, kind = '', vimeoId = '';

      if(typeof this.$route.query.overlay !== 'undefined') {
        shown = true;

        switch(this.$route.query.overlay) {
          case 'search':
            kind = 'search';
            break;
          case 'watch':
            kind = 'watch';
            vimeoId = ''; // TODO
            break;
          case 'powerlist':
            kind = 'powerlist';
            break;
        }
      }

      this.$store.dispatch('SET_OVERLAY', {
        settings: {shown, kind, vimeoId},
        delay: 0
      });
    }
  },
  methods: {
    /*
    ------------------------------------------
    | onOverlayScroll:void
    |
    | e:object - event object
    |
    | Handle overlay scroll.
    ------------------------------------------ */
    onOverlayScroll(e) {
      // set overlay scroll in the store
      let offset = e.srcElement.scrollTop;
      this.$store.dispatch('SET_OVERLAY_SCROLL', {offset});
    }
  }
};
</script>

<style lang="sass">
@import "src/styles/global"

#overlay
  position: fixed
  top: 0px
  left: 0px
  width: 100%
  height: 100%
  background-color: $semi-opaque-black
  z-index: 90
  opacity: 0
  visibility: hidden
  transition: opacity $fast linear, visibility 0ms linear $fast

  &.shown
    transition: opacity $fast linear, visibility 0ms linear 0ms
    opacity: 1
    visibility: visible

+respond-to($tablet-landscape)
  #overlay
</style>
