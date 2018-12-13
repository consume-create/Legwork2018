<template>
</template>

<script>
  import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

  let timeout = null

  export default {
    name: 'BaseOverlay',
    deactivated() {
      clearTimeout(timeout)
      clearAllBodyScrollLocks()
      this.$el.style.overflowY = 'hidden'
    },
    activated() {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        disableBodyScroll(this.$el)
        this.$el.style.overflowY = 'auto'
      }, 333)
    }
  }
</script>
