<template>
  <div id="app">
    <header-view></header-view>
    <hero-view></hero-view>
    <biz-widget-view></biz-widget-view>
    <power-tools-view></power-tools-view>
    <router-view class="view"></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue';
import HeroView from './views/HeroView.vue';
import BizWidgetView from './views/BizWidgetView.vue';
import PowerToolsView from './views/PowerToolsView.vue';
import FooterView from './views/FooterView.vue';

export default {
  name: 'app',
  components: { HeaderView, HeroView, BizWidgetView, FooterView, PowerToolsView },
  props: ['discipline']
}
</script>

<styles lang='sass'>
</styles>
