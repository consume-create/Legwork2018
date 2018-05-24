<template>
  <div id="biz-widget" :class="slideClass">
    <div id="biz-inner" @scroll="onBizWidgetScroll">
      <studio-about></studio-about>
    </div>
    <div id="arbitrary-thing"></div>
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

      // test
      if(pos === '') {
        this.updateMask(0);
      } else {
        let iteration = 0;
        this._$arbitrary_thing.off('webkitAnimationStart').on('webkitAnimationStart', (e) => {
          iteration += 1;
        });
        this._$arbitrary_thing.off('webkitAnimationIteration').on('webkitAnimationIteration', (e) => {
          this.updateMask(iteration);
          iteration += 1;
        });
        this._$arbitrary_thing.off('webkitAnimationEnd').on('webkitAnimationEnd', (e) => {
          this.updateMask(30);
        });
      }
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
    },

    updateMask(step) {
      this._$biz_widget.css('mask-position', `0% ${step * 3.333}%`);
    }
  },
  /*
  ------------------------------------------
  | mounted:void
  |
  | Handle mounted.
  ------------------------------------------ */
  mounted() {
    // class vars
    this._$biz_widget = $('#biz-widget');
    this._$arbitrary_thing = $('#arbitrary-thing');
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
  color: $grandpas-office
  overflow: hidden
  visibility: hidden
  //transition: visibility 0ms linear $speed-metal

  //mask: url(/svgs/masks.svg#mask)

  mask: url(/images/cool-tear-mask.png)
  mask-repeat: no-repeat
  mask-size: 100% 3100%
  mask-position: 0% 0%

  // &:before
  //   content: ""
  //   position: absolute
  //   top: 50%
  //   left: 50%
  //   width: 100%
  //   height: 100%
  //   transform: translate3d(-50%, -50%, 0)
  //   background-image: url(/images/shitty-erase-2.png)
  //   background-repeat: no-repeat
  //   background-size: 100% 2000%
  //   background-position-y: 0%
  //   z-index: -1

  &.wide
    //transition: visibility 0ms linear 0ms
    visibility: visible
    //animation: mask-in 1.5s steps(19) normal forwards

    // &:before
    //   animation: erase-page 1.5s steps(19) normal forwards

    // #biz-inner
    //   transform: translate3d(0%, 0px, 0)
    //   transition: transform $speed-metal $evil-ease $speed-metal

    // #biz-inner
    //   opacity: 1
    //   transition: opacity $speed-metal $evil-ease $speed-metal

    #arbitrary-thing
      animation: test 66ms linear 30

  #biz-inner
    box-sizing: border-box
    width: 100%
    height: 100%
    padding-top: span(3, 24)
    background-color: $darkerGray
    overflow: scroll

    // transform: translate3d(100%, 0px, 0)
    // transition: transform $speed-metal $evil-ease 0ms

    // opacity: 0
    // transition: opacity $speed-metal $evil-ease 0ms

    h2
      color: $grandpas-office

  #arbitrary-thing
    position: fixed
    top: -100px
    left: 0px
    visibility: hidden
    transform: translate3d(0px, 0px, 0)

@keyframes test
  100%
    transform: translate3d(1px, 0px, 0)
</style>
