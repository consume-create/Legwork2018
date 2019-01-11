<template>
  <article class="process-scrubber" :class="classes">
    <div class="content">
      <copy-block :headline='data.headline' :copy='data.copy'></copy-block>
      <div class="scrubber-container" @change-slide="onSliderChange">
        <carousel-component :items='data.images' :selectedIndex='sliderVal'></carousel-component>
        <slider-component :numItems="data.images.length" @sliderChange='onSliderChange'></slider-component>
      </div>
    </div>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
/*
*
* Process Scrubber 
* - style overriden html slider, used by process-scrubber
* @param data - object containing an array of images. 
*
*/

import CopyBlock from "./shared/copy-block.vue";
import CarouselComponent from './shared/carousel-component.vue';
import SliderComponent from "./shared/slider-component.vue"

export default {
  name: "ProcessScrubber",
  components: {
    CarouselComponent,
    CopyBlock,
    SliderComponent, 
  },
  props: ["data"],
  data: function() {
    return {
      sliderVal: 0,
      schema
    };
  },
  methods: {
    onSliderChange(value) {
      this.sliderVal = value
    },
  },
  computed: {
    classes() {
      return {
        "light-theme": this.data.theme === "light",
        "dark-theme": this.data.theme === "dark"
      };
    },
  }
};

const schema = {
    type: 'object',
    properties: {
      headline: {"$ref": "#/definitions/headline"},
      copy: {"$ref": "#/definitions/copy"},
      images: {
        type: 'array',
        items: {"$ref": "#/definitions/image"},
        additionalItems: false,
        minItems: 1,
      },
    },
    required: ['headline', 'copy', 'images'],
  }
</script>

<style lang="sass" scoped>
@import "src/styles/global"

article.process-scrubber
  position: relative
  padding-top: 86px
  &.dark-theme
    background: $grandpas-basement
  .content
    +grid
    .copy-block
      grid-column: 3 / span 16
      margin-bottom: 72px

    .scrubber-container
      grid-column: 1 / span 20
      +grid
      .carousel-component
        grid-column: 3 / span 16
        position: relative
        height: 100%
        margin-bottom: 100px

      .slider-component
        position: absolute
        bottom: 0px
  
+respond-to($tablet-landscape)  
  article.process-scrubber
    padding-top: 0
    overflow: hidden
    .content
      .copy-block
        grid-column: 17 / span 6
        grid-row: 1
        align-self: center

      .scrubber-container
        display: block
        margin: 0
        margin-top: 114px
        grid-column: 3 / span 9
        grid-row: 1

        .carousel-component
          width: 100%

        .slider-component
          position: relative
          margin: auto

+respond-to($desktop) 
  article.process-scrubber
    .content
      .copy-block
        grid-column: 17 / span 4

</style>