<template>
  <article class="watch-overlay overlay">
    watch
  </article>
</template>

<script>
  import BaseOverlay from './base-overlay.vue'

  export default {
    name: 'WatchOverlay',
    extends: BaseOverlay
  }
</script>

<style lang="sass" scoped>
  @import "src/styles/global"

  article.watch-overlay
</style>