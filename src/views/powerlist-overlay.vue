<template>
  <article class="powerlist-overlay overlay">
    powerlist
  </article>
</template>

<script>
  import BaseOverlay from './base-overlay.vue'

  export default {
    name: 'PowerlistOverlay',
    extends: BaseOverlay
  }
</script>

<style lang="sass" scoped>
  @import "src/styles/global"

  article.powerlist-overlay
</style>