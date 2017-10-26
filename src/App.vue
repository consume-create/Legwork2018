<template>
  <div id='app'>
    <header-view></header-view>
    <hero-view></hero-view>
    <content-view></content-view>
    <router-view v-if='environment == "development"'></router-view>
    <biz-widget-view></biz-widget-view>
    <power-tools-view></power-tools-view>
    <footer-view></footer-view>
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
  }
}
</script>

<style lang='sass'>
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
  // TODO
  font: normal normal normal 14px/14px $font1
  -webkit-font-smoothing: antialiased
  -webkit-text-size-adjust: none

body.locked
  overflow: hidden

#app
  width: 100%
  height: 100%
</style>
