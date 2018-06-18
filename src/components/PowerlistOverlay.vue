<template>
  <div id="powerlist-overlay">

  </div>
</template>

<script>
export default {
  name: 'powerlist-overlay',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | Project:object
  ------------------------------------------ */
  props: [
  ],
}
</script>

<style lang='sass'>
@import "src/styles/global"

#powerlist-overlay
  width: 100%
  height: 100%
  background: $color-bg-body
  text: $color-text

</style>