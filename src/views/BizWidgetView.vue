<template>
  <div id="biz-widget">
    <div id="biz-widget-inner">
      <span>Biz Widget</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'biz-widget-view'
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
  background-color: $black
  transform: translate3d(100%, 0%, 0)
  visibility: hidden
  overflow: scroll

  #biz-widget-inner
    +grid
    position: relative
    width: 100%
    height: 500%

    span
      display: inline-block
      position: absolute
      top: 10%
      left: 50%
      color: $white
      transform: translate(-50%, -50%)
</style>
