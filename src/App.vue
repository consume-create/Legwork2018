<template>
  <div id="app">
    <header-view></header-view>
    <hero-view></hero-view>
    <content-view></content-view>
    <router-view v-if="environment == 'development'"></router-view>
    <footer-view></footer-view>
    <biz-widget-view></biz-widget-view>
    <power-tools-view></power-tools-view>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue';
import ContentView from './views/ContentView.vue';
import HeroView from './views/HeroView.vue';
import BizWidgetView from './views/BizWidgetView.vue';
import PowerToolsView from './views/PowerToolsView.vue';
import FooterView from './views/FooterView.vue';

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
    ContentView
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
      environment: process.env.NODE_ENV
    }
  },

  computed: {
    scrollLock() {
      return this.$store.state.appScroll.win.locked;
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

    // body initial lock
    if(this.$store.state.appScroll.win.locked) this._$body.addClass('locked');
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
    | scrollLock:void
    |
    | Watch scroll lock and set body class.
    ------------------------------------------ */
    scrollLock() {
      if(this.$store.state.appScroll.win.locked) {
        this._$body.addClass('locked');
      } else {
        this.$store.dispatch('SET_ACTIVE_SCROLL', 'win');
        this._$body.removeClass('locked');
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
  background-color: $color-bg-body
  color: $color-text
  font-family: $base-font
  -webkit-font-smoothing: antialiased
  -webkit-text-size-adjust: none

body.locked
  overflow: hidden

#app
  width: 100%
  height: 100%
</style>
