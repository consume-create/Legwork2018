<template>
  <div id="overlay" :class="[shown, kind]">
  </div>
</template>

<script>
export default {
  name: 'overlay-view',
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
  visibility: hidden
  z-index: 90

  &.shown
    visibility: visible

+respond-to($tablet-landscape)
  #overlay
</style>
