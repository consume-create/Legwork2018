<template>
  <div id="hero" :class="title">
    <div id="hero-inner" v-if="typeof title !== 'undefined'">
      <span id="big-test">{{ abbrev }}</span>
      <span id="little-test">Hero {{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-view',
  computed: {
    abbrev() {
      return _.startCase(this.$route.params.discipline.slice(0, 2));
    },
    title () {
      return this.$route.params.discipline;
    }
  }
};
</script>

<style lang="sass">
@import "src/styles/global"

#hero
  +grid
  position: relative
  width: 100%
  height: 100%
  background-color: $color-bg-yellow

  #hero-inner
    display: inline-block
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    span
      display: block

    span#big-test
      font: normal normal $heavy 120px/120px $base-font

    span#little-test
      font: normal normal $regular 14px/14px $base-font
</style>
