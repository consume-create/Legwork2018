<template>
  <div id="app" v-bind:class="zone">
    <header-view></header-view>
    <hero-view></hero-view>
    <content-view></content-view>
    <router-view></router-view>
    <footer-view></footer-view>
    <biz-widget-view></biz-widget-view>
    <power-tools-view></power-tools-view>
    <case-study-view></case-study-view>
    <overlay-view></overlay-view>
  </div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import HeaderView from './HeaderView.vue';
import ContentView from './ContentView.vue';
import HeroView from './HeroView.vue';
import BizWidgetView from './BizWidgetView.vue';
import PowerToolsView from './PowerToolsView.vue';
import FooterView from './FooterView.vue';
import CaseStudyView from './CaseStudyView.vue';
import OverlayView from './OverlayView.vue';

export default {
  name: 'app',

  /*
  ------------------------------------------
  | components:void (-)
  ------------------------------------------ */
  components: {
    HeaderView,
    HeroView,
    BizWidgetView,
    FooterView,
    PowerToolsView,
    ContentView,
    CaseStudyView,
    OverlayView
  },

  /*
  ------------------------------------------
  | props:void (-)
  |
  | discipline:string - based on the route
  ------------------------------------------ */
  props: [
    'discipline'
  ],

  /*
  ------------------------------------------
  | data:object (-)
  |
  | environment:string - The curent env
  ------------------------------------------ */
  data: function(){
    return {
      environment: process.env.NODE_ENV,
      animationLoop: []
    }
  },

  computed: {
    scrollLock() {
      return this.$store.state.appScroll.win.locked;
    },
    menu() {
      return this.$store.state.header.menu;
    },
    zone () {
      let p = this.$route.path.split('/')[1],
          zone = p === '' ? 'home' : p;

      return zone;
    }
  },

  /*
  ------------------------------------------
  | beforeMount:void
  |
  | Handle before mount.
  ------------------------------------------ */
  beforeMount() {
    this._$wn = $(window);
    this._$body = $('body');

    // TODO: is this test good enough?
    this._ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // initial scroll settings
    // TODO: could be done on ssrInit
    this.onActiveScrollChange();
  },

  /*
  ------------------------------------------
  | mounted:void
  |
  | Handle mounted.
  ------------------------------------------ */
  mounted() {
    // window
    this._$wn
      .on('scroll.app', this.onWinScroll.bind(this))
      .on('resize.app', this.onResize.bind(this))
      .trigger('resize');

    // ensure initial scroll is triggered after resize
    _.defer(() => this._$wn.trigger('scroll'));
  },

  watch: {
    /*
    ------------------------------------------
    | $route.query.slide:void
    |
    | Watch the biz widget for active scroll.
    ------------------------------------------ */
    '$route.query.slide': {
      handler: 'onActiveScrollChange'
    },

    /*
    ------------------------------------------
    | $route.params.project:void
    |
    | Watch the case study for active scroll.
    ------------------------------------------ */
    '$route.params.project': {
      handler: 'onActiveScrollChange'
    },

    /*
    ------------------------------------------
    | menu:void
    |
    | Watch the menu for active scroll.
    ------------------------------------------ */
    'menu': {
      handler: 'onActiveScrollChange'
    },

    /*
    ------------------------------------------
    | overlay:void
    |
    | Watch the overlay for active scroll.
    ------------------------------------------ */
    '$route.query.overlay': {
      handler: 'onActiveScrollChange'
    },

    /*
    ------------------------------------------
    | scrollLock:void
    |
    | Watch scroll lock and set body class.
    ------------------------------------------ */
    scrollLock() {
      if(this.$store.state.appScroll.win.locked) {
        let container;

        switch(this.$store.state.activeScroll) {
          case 'overlay':
            container = document.getElementById('overlay');
            break;
          case 'menu':
            container = document.getElementById('mobile-menu');
            break;
          case 'project':
            container = document.getElementById('case-study');
            break;
        }

        if(this._ios === true) disableBodyScroll(container);
        else this._$body.addClass('locked');
      } else {
        if(this._ios === true) clearAllBodyScrollLocks();
        else this._$body.removeClass('locked');
      }
    }
  },

  methods: {
    /*
    ------------------------------------------
    | onWinScroll:void
    |
    | e:object - event object
    |
    | Handle scroll.
    ------------------------------------------ */
    onWinScroll(e) {
      // set win scroll in the store
      let offset = window.pageYOffset;
      this.$store.dispatch('SET_WIN_SCROLL', {offset});
    },

    /*
    ------------------------------------------
    | onResize:void
    |
    | e:object - event object
    |
    | Handle resize.
    ------------------------------------------ */
    onResize(e) {
      // set app size in the store
      this.$store.dispatch('SET_APP_SIZE', {
        width: this._$wn.width(),
        height: this._$wn.height(),
        ratio: this._$wn.height() / this._$wn.width(),
        breakpoint: (this._$wn.width() >= 768 && this._$wn.width() > this._$wn.height()) ? 'tablet-up' : 'mobile'
      });
    },

    /*
    ------------------------------------------
    | onActiveScrollChange:void
    |
    | Handle active scroll change.
    ------------------------------------------ */
    onActiveScrollChange() {
      let locked = false, activeScroll = 'win';

      // studio
      if(typeof this.$route.query.slide !== 'undefined') {
        locked = true;
        activeScroll = 'studio';
      }

      // project
      if(typeof this.$route.params.project !== 'undefined') {
        locked = true;
        activeScroll = 'project';
      }

      // mobile menu
      if(this.$store.state.header.menu === 'open') {
        locked = true;
        activeScroll = 'menu';
      }

      // overlay
      if(typeof this.$route.query.overlay !== 'undefined') {
        locked = true;
        activeScroll = 'overlay';
      }

      // set it
      this.$store.dispatch('SET_WIN_SCROLL', {locked});
      this.$store.dispatch('SET_ACTIVE_SCROLL', activeScroll);
    }
  }
}
</script>

<style lang="sass">
@import 'src/styles/fonts'
@import 'src/styles/reset'
@import 'src/styles/global'
@import 'src/styles/animations'
@import 'src/styles/utils'

/* Global Styles */
::selection
  background: $black
  text-shadow: none

html, body
  width: 100%
  height: 100%

body
  background-color: $faded
  color: $color-text
  -webkit-font-smoothing: antialiased
  -webkit-text-size-adjust: none
  font: normal normal 18px/1.8 "neuzeit-grotesk", san-serif

body.locked
  overflow: hidden

#app
  width: 100%
  height: 100%

// Global Typography Settings
h1,
.h1,
.big-type
  font-size: 55px
  letter-spacing: 1.6px

  +respond-to($tablet-landscape)
    font-size: 60px

h2,
.h2,
.med-type
  font-size: 26px
  font-weight: 700
  letter-spacing: 3.4px

  +respond-to($tablet-landscape)
    font-size: 45px

h3,
.h3,
.section-header
  font-size: 34px
  letter-spacing: 2.0px

h4,
.h4,
.list-header
  font-size: 18px
  font-weight: 700

</style>
