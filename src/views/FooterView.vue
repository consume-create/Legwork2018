<template>
  <footer v-bind:class="discipline + ' fill'">
    <span>Up Next ...</span>
    <div v-bind:class="next + ' fill cover'"></div>
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
  computed: {
    discipline () {
      return this.$route.params.discipline;
    },
    scroll() {
      return this.$store.state.appScroll.win;
    },
    next() {
      return this.$store.getters.nextPage;
    }
  },
  watch: {
    /*
    ------------------------------------------
    | scroll:void
    |
    | Handle scroll.
    ------------------------------------------ */
    scroll: {
      handler: 'onScroll',
      deep: true
    },
  },

  methods: {
    /*
    ------------------------------------------
    | onScroll:void
    |
    | Handle scroll.
    ------------------------------------------ */
    onScroll() {
      window.requestAnimationFrame(() => {
        let offset = Math.floor(this._$footer.offset().top - this.scroll.offset);

        if( offset < this._$footer.height() ){
          this.percent = (offset / this._$footer.height()) * 100;
        }
        if( offset <= 0 ){
          this.$store.dispatch("TRANSITION", 'footer');
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
    this._$footer = $(this.$el);
    this._$cover = $(".cover", this._$footer);
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
