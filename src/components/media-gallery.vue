<template>
  <article class="media-gallery">
    <div class="content">
      <carousel-component :items='data.media' :selectedIndex='activeMediaIndex'></carousel-component>
      <div class="mediaSelectors" v-if="mediaCount > 1">
        <label 
          v-for="(mediaItem, index) in data.media" 
          class='mediaSelector'
          :class="{selected: index == activeMediaIndex}" 
          :key='index' 
          name="mediaSelector"
        >
          <input type="radio" :value="index" v-model='activeMediaIndex'/>
        </label>
      </div>
    </div>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
import CarouselComponent from './carousel-component.vue';

export default {
  name: "MediaGallery",
  props: ["data"],
  data() {
    return {
      activeMediaIndex: 0,
      mediaCount: this.data.media.length, 
      schema,
    }
  },
  components: {
    CarouselComponent
  },
};

const schema = {
  type: 'object',
  properties: {
    media: {
      type: 'array',
      items: [{"$ref": "#/definitions/image"}, {"$ref": "#/definitions/video"}],
      additionalItems: false,
      minItems: 1,
    },
  },
  required: ['media'],
}

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  $aspect: 16 / 9
  $dot-radius: 5px
  $dot-inactive: grey
  $dot-hover: black
  $dot-selected: black

  @mixin circle($r)
    width: $r * 2
    height: $r * 2
    border-radius: 50%

  article
    +grid
    padding-top: 80px
    padding-bottom: 80px
    .content
      grid-column: 1 / span 20
      .carousel-component
        +aspect-ratio(16, 9)
      .mediaSelectors
        height: 0px
        transform: translate(0, 40px) // Keeps container height consistent with or without selectors
        margin: auto
        display: flex
        justify-content: center
        align-items: center
        user-select: none
        max-width: 100%
        label
          +circle($dot-radius * 4)
          cursor: pointer
          position: relative
          input
            +circle($dot-radius)
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            background: $dot-inactive
            margin: 0
            outline: none
            appearance: none
            cursor: pointer
            transition: transform 666ms ease, color 100ms ease
            &:hover
              background: $dot-hover
              transform: translate(-50%, -50%) scale(1.4)
          &.selected input 
            background: $dot-selected
            transform: translate(-50%, -50%) scale(1.8)
      
  +respond-to($tablet-landscape)  
    article
      +grid
      padding-top: 80px
      padding-bottom: 120px
      .content
        display: block
        grid-column: 5 / span 14
        .media
          height: 0
          padding-bottom: calc(9 / 16 * 100%)
          overflow: hidden
          margin-bottom: 20px
        
      .mediaSelectors
        width: 100%
        display: flex
        justify-content: center
        user-select: none

</style>
