// 
// 
// This is the slider component used in the Process Scrubber
// 
// 

<template>
  <div class="slider-component" :style='sliderWidth'>
    <span class="slider-dots">
        <span
          v-for="index in numItems" 
          :key="`dot${index-1}`"
          class="slider-dot"
          :class="{active: index-1 == sliderVal}"
          :style="dotOpacity(index-1)"
        >
        </span>
    </span>
    <div class="svg-container">
      <span class="svg-thumb" :style="thumbPos">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.3 100.01">
          <path class="handle-lump" d="M.65,41H310.3a34.39,34.39,0,0,0-.15-3.91c-134-.59-116-36.59-155-37.09s-21,36.5-155,37.09A29.32,29.32,0,0,0,0,41Z"/>
          <circle class="handle-circle" cx="155.15" cy="61.01" r="39"/>
          <polygon class="handle-arrow" points="137.41 61.01 145.18 53.23 141.65 49.69 133.87 57.47 130.33 61.01 133.87 64.54 141.65 72.32 145.18 68.78 137.41 61.01"/>
          <polygon class="handle-arrow" points="173.89 61.01 166.11 68.78 169.65 72.32 177.43 64.54 180.96 61.01 177.43 57.47 169.65 49.69 166.11 53.23 173.89 61.01"/>
        </svg>
      </span>
    </div>
    <input
      class="slider-range"
      id="rangevalue"
      type="range"
      min="0"
      :max="numItems-1"
      v-model="sliderVal"
      v-on:change="sliderChange"
      v-on:input="sliderChange"
    >
  </div>
</template>

<script>
/*
*
* Slider Component 
* - style overriden html slider, used by process-scrubber
* @prop numItems - index to show
* @emits sliderChange event captured by component parent
*
*/

export default {
  name: "SliderComponent",
  props: ["numItems"],
  data: function() {
    return {
      sliderVal: 0,
    };
  },
  methods: {
    sliderChange() {
      this.$emit("sliderChange", this.sliderVal);
    },
    dotOpacity(index) {
      return {
        opacity: 1 - (Math.abs(index - this.sliderVal)) / this.numItems
      };
    },
  },
  computed: {
    thumbPos() {
      return {
        "left": `${this.sliderVal / (this.numItems - 1) * 100}%`
      }
    },
    sliderWidth() {
      return {"width": `${this.numItems * 64}px`}
    }
  }
};

</script>

<style lang="sass" scoped>
@import "src/styles/global"

// Slider Styles
$dot-radius: 5px
$dot-color: $white
$thumb-radius: 28px
$thumb-color: $grandpas-basement
$slider-height: 100px

@mixin circle($r)
  width: $r * 2
  height: $r * 2
  border-radius: 50%

.slider-component
  box-sizing: border-box
  max-width: 100%
  height: 100px
  left: 50%
  transform: translate(-50%, 50px)
  // width: 100%  Use this if stretching of dots is preffered. Right now uses computed width to equally space dots. 
  // height: 100px
  // left: 0
  // transform: translate(0, 50px)
  .slider-dots
    height: 50px
    display: flex
    justify-content: space-between
    align-items: center
    box-sizing: border-box
    padding: 0 ($thumb-radius / 2 - $dot-radius / 2)
    .slider-dot
      +circle($dot-radius)
      background: $dot-color
      transition: transform $fast ease-in, opacity $fast ease-in
      transform: scale(1)
      &.active
        transition: transform $fast ease-out, opacity $fast ease-out
        transform: translate(0, -28px) scale(1.8)

  $svg-width: 218px

  .svg-container
    height: 10px
    position: relative
    box-sizing: border-box
    top: 0
    left: 0
    margin: 0 $thumb-radius / 2
    .svg-thumb
      width: $svg-width
      margin: 0
      padding: 0
      position: absolute
      top: -26px
      transform: translate(-50%, 0)
      transition: left $fast ease
      svg
        .handle-lump
          fill: $faded
        .handle-dot
          fill: $grandpas-basement
        .handle-arrow
          fill: white

// Slider Reset
input[type=range]
  opacity: 0
  -webkit-appearance: none
  width: 100%
  height: 130px
  background: transparent
  margin: 0
  padding: 0
  position: absolute
  top: -10px
  border-color: transparent
  &:focus 
    outline: none
  &::-webkit-slider-thumb
    -webkit-appearance: none
  &::-ms-track
    width: 100%
    cursor: pointer
    background: transparent 
    border-color: transparent
    color: transparent
  &::-moz-range-track
    background: transparent 
    color: transparent
    border-color: transparent
    outline: none
    &::focus, &::selected
      border: transparent
      outline: none
    
// Slider Style
@mixin thumbStyle
  position: relative
  top: 20px
  -webkit-appearance: none
  +circle($thumb-radius + 20px)
  background: transparent
  border-color: transparent
  cursor: grab

input[type=range]
  &::-webkit-slider-thumb
    margin-top: -14px
    +thumbStyle
  &::-moz-range-thumb
    +thumbStyle
  &::-ms-thumb
    +thumbStyle
  
+respond-to($tablet-landscape)  
  .slider-component
    transform: translate(0, 0)
    margin: auto
    .slider-dots
      width: 100%
      height: 36px
      position: absolute
      top: 0
      left: 0
      .slider-dot.active
        transform: translate(0, 0) scale(1)

    .svg-container .svg-thumb svg
      .handle-lump
        display: none
      .handle-circle
        fill: $white
      .handle-arrow
        fill: $gray
    
  input[type=range]
    height: 60px
    top: -20px

</style>