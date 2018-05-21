<template>
  <div id="power-tools" :style="translate" :class="[active, pos, mode]">
    <div id="power-inner" v-if="this.breakpoint === 'mobile'">
      <ul>
        <li id="power-search-btn">
          <router-link to="?overlay=search">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <circle stroke-width="3" stroke-miterlimit="10" cx="10" cy="10" r="8"/>
              <line stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="19" y1="19" x2="23" y2="23"/>
            </svg>
          </router-link>
        </li>
        <li id="power-play-btn">
          <router-link to="?overlay=watch">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <circle stroke-width="3" stroke-miterlimit="10" cx="12.5" cy="12.5" r="10.5"/>
              <polygon stroke-width="4" stroke-miterlimit="10" points="12.9,12.5 12.1,13 12.1,12"/>
            </svg>
          </router-link>
        </li>
        <li id="power-list-btn">
          <router-link to="?overlay=powerlist">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <polygon points="13,1 17,1 13,10 17,10 9,25 11,14 8,14 	"/>
              <path d="M3.5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2h1.8l1.5-4H3.5z"/>
              <path d="M21.5,14c1.1,0,2-0.9,2-2s-0.9-2-2-2h-1.7l-2.1,4H21.5z"/>
              <path d="M21.5,21c1.1,0,2-0.9,2-2s-0.9-2-2-2h-5.4L14,21H21.5z"/>
              <path d="M3.5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2h3.7l0.7-4H3.5z"/>
              <path d="M3.5,3c-1.1,0-2,0.9-2,2s0.9,2,2,2H8l1.5-4H3.5z"/>
              <path d="M21.5,7c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2.7l-1.8,4H21.5z"/>
            </svg>
            <span>PowerList</span>
          </router-link>
          <span id="power-list-count">3</span>
        </li>
      </ul>
    </div>
    <ul v-else>
      <li id="power-search-btn">
        <router-link to="?overlay=search">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <circle stroke-width="3" stroke-miterlimit="10" cx="10" cy="10" r="8"/>
            <line stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="19" y1="19" x2="23" y2="23"/>
          </svg>
        </router-link>
      </li>
      <li id="power-play-btn">
        <router-link to="?overlay=watch">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <circle stroke-width="3" stroke-miterlimit="10" cx="12.5" cy="12.5" r="10.5"/>
            <polygon stroke-width="4" stroke-miterlimit="10" points="12.9,12.5 12.1,13 12.1,12"/>
          </svg>
        </router-link>
      </li>
      <li id="power-list-btn">
        <router-link to="?overlay=powerlist">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <polygon points="13,1 17,1 13,10 17,10 9,25 11,14 8,14 	"/>
            <path d="M3.5,10c-1.1,0-2,0.9-2,2s0.9,2,2,2h1.8l1.5-4H3.5z"/>
            <path d="M21.5,14c1.1,0,2-0.9,2-2s-0.9-2-2-2h-1.7l-2.1,4H21.5z"/>
            <path d="M21.5,21c1.1,0,2-0.9,2-2s-0.9-2-2-2h-5.4L14,21H21.5z"/>
            <path d="M3.5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2h3.7l0.7-4H3.5z"/>
            <path d="M3.5,3c-1.1,0-2,0.9-2,2s0.9,2,2,2H8l1.5-4H3.5z"/>
            <path d="M21.5,7c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2.7l-1.8,4H21.5z"/>
          </svg>
        </router-link>
        <span id="power-list-count">3</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'power-tools-view',
  computed: {
    breakpoint() {
      return this.$store.state.appSize.breakpoint;
    },
    active() {
      // TODO: transition?
      return (/^(animation|interactive)$/i).test(this.$store.getters.whereTheHellAreWe) && this.$store.state.header.menu !== 'open' ? 'enabled' : 'disabled';
    },
    pos() {
      return this.breakpoint === 'mobile' && this.scroll.win.offset >= this.$store.state.appSize.height - (this.$store.state.header.transform + this.$store.state.header.height) ? 'attached' : '';
    },
    mode() {
      return this.breakpoint === 'tablet-up' && this.$store.state.header.mode !== 'minimized' ? '' : 'shown';
    },
    translate() {
      return this.breakpoint === 'mobile' && this.pos === 'attached' ? `transform: translate3d(0px, ${this.$store.state.header.transform + this.$store.state.header.height}px, 0)` : '';
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
  height: 48px
  z-index: 100
  display: none

  &.enabled
    display: block

  &.attached
    position: fixed
    top: 0px

  #power-inner
    +grid
    width: 100%
    height: 100%
    background-color: $darkGray

    ul
      display: flex
      grid-column: 3 / span 16
      grid-row: 1
      width: 100%
      padding-top: 14px

      li
        display: inline-block
        width: 20px
        height: 20px
        margin-right: 24px

        a
          text-decoration: none

          svg
            width: 20px
            hieght: 20px
            fill: none
            stroke: $slight_white

      li#power-list-btn
        position: relative
        width: auto
        margin-right: 0px

        a
          padding: 0px 23px 0px 27px

          svg
            position: absolute
            top: 0px
            left: 0px
            fill: $slight_white
            stroke: none

          span
            font-size: 14px
            line-height: 20px
            color: $slight_white

        #power-list-count
          position: absolute
          display: block
          width: 16px
          height: 16px
          top: 2px
          right: 0px
          border-radius: 8px
          background-color: $burn_out
          color: $slight_white
          font-size: 11px
          line-height: 17px
          font-weight: $bold
          text-align: center

+respond-to($tablet-landscape)
  #power-tools
    position: fixed
    top: 50%
    right: span(2, 24)
    left: auto
    width: 0px
    height: 200px
    margin-top: -100px

    &.shown
      ul
        li
          visibility: visible
          opacity: 1
          transform: translate3d(0px, 0px, 0)

          &:nth-child(1)
            transition: visibility 0ms linear 0ms, opacity 366ms $evil-ease, transform $fast $evil-ease

          &:nth-child(2)
            transition: visibility 0ms linear 0ms, opacity 366ms $evil-ease 100ms, transform $fast $evil-ease 100ms

          &:nth-child(3)
            transition: visibility 0ms linear 0ms, opacity 366ms $evil-ease 200ms, transform $fast $evil-ease 200ms

    ul
      display: flex
      flex-direction: column
      justify-content: space-between
      width: 35px
      height: 100%
      transform: translate3d(-50%, 0%, 0)

      li
        width: 25px
        height: 25px
        padding: 5px
        cursor: pointer
        visibility: hidden
        opacity: 0
        transform: translate3d(36px, 0px, 0px)

        &:nth-child(1)
          transition: visibility 0ms linear $fast + 200ms, opacity 300ms $evil-ease 200ms, transform $fast $evil-ease 200ms

        &:nth-child(2)
          transition: visibility 0ms linear $fast + 100ms, opacity 300ms $evil-ease 100ms, transform $fast $evil-ease 100ms

        &:nth-child(3)
          transition: visibility 0ms linear $fast, opacity 300ms $evil-ease, transform $fast $evil-ease

        svg
          width: 25px
          height: 25px
          fill: none
          stroke: $black

      li#power-list-btn
        position: relative

        svg
          fill: $black
          stroke: none

        #power-list-count
          position: absolute
          display: block
          width: 16px
          height: 16px
          top: 0px
          right: 0px
          border-radius: 8px
          background-color: $burn_out
          color: $slight_white
          font-size: 11px
          line-height: 17px
          font-weight: $bold
          text-align: center
          transform: translate(25%, -25%)

</style>
