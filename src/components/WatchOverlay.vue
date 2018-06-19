<template>
  <div id="watch-overlay">

  </div>
</template>
<script>
export default {
  name: 'watch-overlay',

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

#watch-overlay
  width: 100%
  height: 100%
  background: $color-bg-body
  text: $faded

</style>