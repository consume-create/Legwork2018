<template>
  <h1 class='text-header'>{{text}}</h1>
</template>

<script>
export default {
  name: 'text-header',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | Project:object
  ------------------------------------------ */
  props: [
    'text'
  ]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
</style>