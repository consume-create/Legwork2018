<template>
  <div id="power-tools" :style="translate" :class="[active, pos, mode]">
    <div id="power-inner" v-if="this.breakpoint === 'mobile'"></div>
    <ul v-else>
      <li id="power-search-btn">
        <router-link to="?overlay=search">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <circle display="inline" stroke-width="4" stroke-miterlimit="10" cx="13" cy="13" r="11"/>
            <line display="inline" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="25" y1="25" x2="30" y2="30"/>
          </svg>
        </router-link>
      </li>
      <li id="power-play-btn">
        <router-link to="?overlay=vimeo">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <circle display="inline" stroke-width="4" stroke-miterlimit="10" cx="16" cy="16" r="14"/>
            <polygon display="inline" stroke-width="4" stroke-miterlimit="10" points="16.4,16 15.6,16.5 15.6,15.5"/>
          </svg>
        </router-link>
      </li>
      <li id="power-list-btn">
        <router-link to="?mode=list">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <rect x="2" y="2" display="inline" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" width="28" height="12"/>
            <polyline display="inline" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" points="28,17 28,22 4,22 4,17"/>
            <polyline display="inline" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" points="26,25 26,30 6,30 6,25"/>
          </svg>
        </router-link>
      </li>
      <li id="power-grid-btn" style="display: none">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <rect x="2" y="2" display="inline" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" width="10" height="10"/>
          <rect x="20" y="2" display="inline" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" width="10" height="10"/>
          <rect x="2" y="20" display="inline" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" width="10" height="10"/>
          <rect x="20" y="20" display="inline" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" width="10" height="10"/>
        </svg>
      </li>
      <li id="power-case-btn">
        <router-link to="?overlay=lightbox">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <rect x="2" y="8" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" width="28" height="12"/>
            <polyline stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" points="28,23 28,30 4,30 4,23"/>
            <rect x="14" y="18" stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" width="4" height="4"/>
            <polyline stroke-width="4" stroke-linejoin="round" stroke-miterlimit="10" points="6,8 11,2 21,2 26,8"/>
          </svg>
        </router-link>
      </li>
    </ul>
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
      display: flex
      flex-direction: column
      justify-content: space-between
      width: 40px
      height: 100%
      transform: translate3d(-50%, 0%, 0)

      li
        width: 32px
        height: 32px
        padding: 4px
        cursor: pointer

        svg
          width: 32px
          height: 32px
          fill: none
          stroke: $black
</style>
