<template>
  <div class='content-cell quote' data-type='quote'>
    <div class='quote-svg' v-html="quote.svg_image">
    </div>
    <div class="cell-title">
      What they're saying
    </div>
    <div class="copy">
      {{quote.quote}}
    </div>
  </div>
</template>

<script>
import BaseCell from './BaseCell';

export default {
  extends: BaseCell,
  name: 'quote-cell',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | quote:object
  ------------------------------------------ */
  props: [
    'quote'
  ],
  methods: {
    /*
    ------------------------------------------
    | init:void (-)
    ------------------------------------------ */
    init() {
      this.$store.dispatch('ADD_COMPONENT_TO_RENDER_QUEUE', this);
    },

    /*
    ------------------------------------------
    | update:void (-)
    ------------------------------------------ */
    update() {
      this.updateProps();

      // If it's in view
      if( this.position < this.$wn.height() && this.position > 0 ){
        $(this.$el).addClass('visible').removeClass('down');
      }

      // If it's out of view
      if( this.position < 0 ){
        $(this.$el).removeClass('visible').addClass('down');
      }
    }
  }
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
@import "src/styles/content-cell"

.quote
  z-index: 0

.copy
  position: relative
  font-size: 300%
  font-weight: bold
  letter-spacing: 0.31px
  line-height: 91px

.quote-svg
  position: absolute
  height: 100%
  width: 100%
  left: 0px
  top: 0px

  /deep/ svg
    position: absolute
    height: 100%
    right: 0px

.cell-title
  font-size: 18px
  color: $black
  letter-spacing: 0
  line-height: 14px

  &:after
    content: ''
    display: block
    margin-top: 24px
    width: 26px
    height: 4px
    background: $black

</style>