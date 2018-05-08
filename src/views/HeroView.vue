<template>
  <div id="hero" v-bind:class="discipline + ' fill'">
    <div id="hero-inner" v-if="typeof discipline !== 'undefined'"></div>
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
    '$route.params.discipline': function(){
      let _origin = this.$store.getters.transitionOrigin;
      switch( _origin ){
        case "footer":
          setTimeout( () => {
            let locked = false;
            this.$store.dispatch('SET_WIN_SCROLL', {locked})
          },1500)
        break;
      }
    }
  },
  methods: {

  }
};
</script>

<style lang="sass">
@import "src/styles/global"

#hero
  width: 100%
  height: 100%

  &.animation
    #hero-inner
      background-image: url(/images/hero-animation-test.png)

  &.interactive
    #hero-inner
      background-image: url(/images/hero-interactive-test.png)

  #hero-inner
    +grid
    width: 100%
    height: 100%
    background-position: 50% 50%
    background-repeat: no-repeat
    background-size: contain
</style>
