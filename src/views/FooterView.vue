<template>
  <footer>
    <span>Up Next ...</span>
  </footer>
</template>

<script>
export default {
  name: 'footer-view',
  methods: {
    /*
    ------------------------------------------
    | onScroll:void
    |
    | e:object - event object
    |
    | Handle scroll.
    ------------------------------------------ */
    onScroll(e) {
      window.requestAnimationFrame(() => {
        if( Math.floor(this._$footer.offset().top - $(window).scrollTop()) <= 0 ){
          this.$router.push( '/' + this.$store.getters.nextPage );
        }
      });
    }
  },

  /*
  ------------------------------------------
  | mounted:void
  |
  | Handle mounted.
  ------------------------------------------ */
  mounted() {
    // class vars
    this._$wn = $(window);
    this._$footer = $(this.$el);

    // events
    this._$wn
      .on('scroll.footer', this.onScroll.bind(this));
  },

  /*
  ------------------------------------------
  | beforeDestroy:void
  |
  | Handle before destroy.
  ------------------------------------------ */
  beforeDestroy() {
    // clean up events
    this._$wn.off('scroll.header');
  }
};
</script>

<style lang="sass">
@import "src/styles/global"

footer
  +grid
  position: relative
  width: 100%
  height: 100%
  background-color: $gray

  span
    display: inline-block
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
