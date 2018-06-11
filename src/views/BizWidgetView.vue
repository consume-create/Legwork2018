<template>
  <div id="biz-widget" :class="slideClass">
    <div id="biz-inner" @scroll="onBizWidgetScroll">
      <studio-about></studio-about>
    </div>
    <div id="biz-widget-mask"></div>
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

      // mask
      // TODO: animation event namespaces?
      if(pos === '') {
        setTimeout(() => this.updateMask(0), 333);
      } else {
        let iteration = 1;
        this._$biz_widget_mask.off('animationstart').on('animationstart', (e) => {
          this.updateMask(0);
        });
        this._$biz_widget_mask.off('animationiteration').on('animationiteration', (e) => {
          this.updateMask(iteration);
          iteration += 1;
        });
        this._$biz_widget_mask.off('animationend').on('animationend', (e) => {
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

    /*
    ------------------------------------------
    | updateMask:void
    |
    | step:number - frame
    |
    | Update mask position / frame.
    ------------------------------------------ */
    updateMask(step) {
      switch(step) {
        case 0:
          this._$biz_widget
            .css({
              'mask-image': 'url(/images/cool-tear-mask.png)',
              'mask-position': '0% 0%'
            });
          this._$biz_inner.css('overflow', 'hidden');
          break;
        case 30:
          this._$biz_widget.css('mask-image', 'none');
          this._$biz_inner.css('overflow', 'scroll');
          break;
        default:
          this._$biz_widget.css('mask-position', `0% ${step * 3.333}%`);
          break;
      }
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
    this._$biz_inner = $('#biz-inner');
    this._$biz_widget_mask = $('#biz-widget-mask');
    this.updateMask(0);
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
  color: $faded
  overflow: hidden
  mask-repeat: no-repeat
  mask-size: 100% 3100%
  opacity: 0
  visibility: hidden
  transition: opacity $fast linear 0ms, visibility 0ms linear $fast

  &.wide
    transition: opacity 0ms linear 0ms, visibility 0ms linear 0ms
    opacity: 1
    visibility: visible

    #biz-widget-mask
      animation: biz-mask-proxy 75ms linear 30

  #biz-inner
    box-sizing: border-box
    width: 100%
    height: 100%
    padding-top: span(3, 24)
    background-color: $grandpas-basement
    overflow: hidden

  #biz-widget-mask
    position: fixed
    top: -100px
    left: 0px
    visibility: hidden
    transform: translate3d(0px, 0px, 0)

@keyframes biz-mask-proxy
  100%
    transform: translateZ(0)
</style>
