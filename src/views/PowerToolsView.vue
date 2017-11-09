<template>
  <div id="power-tools" :style="translate" :class="[active, pos, mode]">
    <div id="power-inner" v-if="this.breakpoint === 'mobile'"></div>
    <ul v-else></ul>
  </div>
</template>

<script>
export default {
  name: 'power-tools-view',
  computed: {
    scroll() {
      return this.$store.state.appScroll;
    },
    breakpoint() {
      return this.$store.state.appSize.breakpoint;
    },
    active() {
      return (/^(animation|interactive|experiential)$/i).test(this.$store.getters.whereTheHellAreWe) ? 'enabled' : 'disabled';
    },
    pos() {
      return this.breakpoint === 'mobile' && this.scroll.win.offset >= this.$store.state.appSize.height - (this.$store.state.header.transform + this.$store.state.header.height) ? 'attached' : '';
    },
    mode() {
      return this.breakpoint === 'tablet-up' && this.$store.state.header.mode === 'minimized' ? 'shown' : '';
    },
    translate() {
      return this.breakpoint === 'mobile' && this.pos === 'attached' ? `transform: translate3d(0px, ${this.$store.state.header.transform + this.$store.state.header.height}px, 0)` : '';
    }
  },
  watch: {
    /*
    ------------------------------------------
    | scroll:void
    |
    | Watch scroll.
    ------------------------------------------ */
    scroll: {
      handler: 'onScroll',
      deep: true
    }
  },
  methods: {
    /*
    ------------------------------------------
    | onScroll:void
    |
    | Handle scroll.
    ------------------------------------------ */
    onScroll() {
      // TODO: theme
    }
  }
};
</script>

<style lang="sass">
@import "src/styles/global"

#power-tools
  position: absolute
  top: 100%
  left: 0px
  width: 100%
  height: 40px
  z-index: 100

  // NOTE: closes the gap between power tools
  // and the bottom of the header
  margin-top: -1px

  &.attached
    position: fixed
    top: 0px

  #power-inner
    width: 100%
    height: 100%
    background-color: $gray

+respond-to($tablet-landscape)
  #power-tools
    position: fixed
    top: 50%
    right: span(2, 24)
    left: auto
    width: 0px
    height: 320px
    transform: translate3d(0%, -50%, 0)
    visibility: hidden
    display: none

    &.enabled
      display: block

    &.shown
      visibility: visible

    ul
      width: 80px
      height: 100%
      background-color: $gray
      transform: translate3d(-50%, 0%, 0)
</style>
