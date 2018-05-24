<template>
  <div class='content-cell job' data-type='job'>
    <div class="cell-title">
      Job Opening
    </div>
    <div class="copy">
      {{job.job_title}}
      <div class="arrow"><svg width="33" height="22" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="5" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M27 11H3M22.14 4L29 10.93 22 18"/></g></svg></div>
    </div>
  </div>
</template>

<script>
import BaseCell from './BaseCell';

export default {
  extends: BaseCell,
  name: 'job-cell',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | job:object
  ------------------------------------------ */
  props: [
    'job'
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

<style lang='sass'scoped>
@import "src/styles/global"
@import "src/styles/content-cell"
.copy
  position: relative
  font-size: 300%
  font-weight: bold
  letter-spacing: 0.31px
  line-height: 91px
  max-width: 460px

  .arrow
    display: inline-block

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
    background: #000

</style>