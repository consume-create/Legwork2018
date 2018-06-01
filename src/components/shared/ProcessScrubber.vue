<template>
    <div class="process-scrubber">
        <slot></slot>

        <div class="scrubber-slider"  @change-slide="sliderChange" :class="`slide-` + sliderVal">
          <div class="scrubber-image" v-for="(slide, index) in scrubberProps" :class='{ active: index == sliderVal  }'>
            <picture-comp :imageProps="slide.image"></picture-comp>
          </div>
        </div>
        <div class="scrubber-controls">
          <input type="range" min=0 :max="scrubberProps.length -1" id="rangevalue" v-on:change="sliderChange" v-model="sliderVal">
        </div>
    </div>
</template>

<script>
import PictureComp from 'components/shared/PictureComp.vue';

export default {
    name: 'process-scrubber',

    components: {
      PictureComp,
    },

    props: [
      'scrubberProps'
    ],
    data: function() {
        return {
          sliderVal: "0"
        }
    },
    methods: {
        sliderChange() {
            this.$emit('sliderChange', this.sliderVal);
        }
    },
};
</script>

<style lang="sass" scoped>
@import "src/styles/global"

.process-scrubber
  grid-column: 3 / span 16

  +subgrid(16)
  grid-auto-rows: 1fr
  position: relative

  .scrubber-copy
    h3
      margin-bottom: 47px

    p
      opacity: 0.5

  .scrubber-slider
    margin-top: 72px
    position: relative
    width: 100%
    height: 100%
    min-height: 350px
    overflow: hidden

    .scrubber-image
      position: absolute
      top: 0
      right: 0
      left: 0
      bottom: 0
      margin: auto
      opacity: 0
      transition: opacity 144ms ease-in

      picture
        height: 100%

      &.active
        opacity: 1.0
        transition: opacity 144ms ease-in

  .scrubber-controls
    width: 100%
    height: 50px
    position: absolute
    bottom: 0

+respond-to($tablet-landscape)
  .process-scrubber
    .scrubber-slider
      margin-top: 0

</style>