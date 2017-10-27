<template>
  <footer>
    <span>Up Next ...</span>
    <div class='cover'></div>
  </footer>
</template>

<script>
export default {
  name: 'footer-view',
  data: function(){
    return {
      percent: 0
    }
  },
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
        let offset = Math.floor(this._$footer.offset().top - $(window).scrollTop());

        if( offset < this._$footer.height() ){
          this.percent = (offset / this._$footer.height()) * 100;
        }
        if( offset <= 0 ){
          this.$router.push( '/' + this.$store.getters.nextPage );
        }

        this._$cover.css('transform', `translate(-${this.percent}%, 0)`);
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
    this._$cover = $(".cover", this._$footer);

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

  .cover
    position: absolute
    height: 100%
    width: 100%
    transform: translate(-100%, 0px)
    background:
      color: $color-bg-yellow
</style>
