<template>
  <div id="hero">
    <div id="hero-inner"></div>
  </div>
</template>

<script>
export default {
  name: 'hero-view',
  computed: {
    zone () {
      let p = this.$route.path.split('/')[1],
          zone = p === '' ? 'home' : p;

      return zone;
    }
  },
  watch: {
    '$route.params.discipline': function(){
      let _origin = this.$store.getters.transitionOrigin;
      switch( _origin ){
        case 'footer':
          setTimeout( () => {
            let locked = false;
            this.$store.dispatch('SET_WIN_SCROLL', {locked});
          }, 666)
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

  .home &
    background-color: $grandpas-office

    #hero-inner
      background-image: url(/images/landing-test.png)

  .animation &
    background-color: $grandpas-office

    #hero-inner
      background-image: url(/images/hero-animation-test.png)

  .interactive &
    background-color: $grandpas-office

    #hero-inner
      background-image: url(/images/hero-interactive-test.png)

  .search &
    background-color: $grandpas-office

  #hero-inner
    +grid
    width: 100%
    height: 100%
    background-position: 50% 50%
    background-repeat: no-repeat
    background-size: inherit
</style>
