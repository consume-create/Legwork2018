<template>
  <div id="hero" v-bind:class="discipline + ' fill'">
    <div id="hero-inner" v-if="typeof discipline !== 'undefined'">
      <span id="big-test">{{ abbrev }}</span>
      <span id="little-test">Hero {{ discipline }}</span>
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
    discipline () {
      return this.$route.params.discipline;
    }
  },
  watch: {
    '$route': function(){
      setTimeout( () => {
        let locked = false;
        this.$store.dispatch('SET_WIN_SCROLL', {locked})
      },1500)
    }
  },
  methods: {

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
