<template>
  <article class="media-gallery">
    <div class="content">
      <carousel-component :items='data.media' :selectedIndex='activeMediaIndex'></carousel-component>
      <div class="mediaSelectors" v-if="mediaCount > 1" :style='selectorsWidth'>
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
      selectorsWidth: {"width": `${this.data.media.length * 64}px`},
      schema,
    }
  },
  methods: {
    // mediaButtonSelect(event, value) {
      //   this.activeMediaIndex = event.currentTarget.value;
    // },
    nextMediaItem() {
      let newIndex = this.activeMediaIndex < this.mediaCount ? this.activeMediaIndex++ : 0
      this.activeMediaIndex = newIndex + 1;
    },
    prevMediaItem() {
      let newIndex = this.activeMediaIndex > 0 ? this.activeMediaIndex-- : this.mediaCount
      this.activeMediaIndex = newIndex - 1;
    },
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
      items: {"$ref": "#/definitions/media"},
      additionalItems: false,
      minItems: 1,
    },
  },
  required: ['images'],
}

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  $aspect: 16 / 9
  $dot-radius: 5px
  $buttonInactiveColor: grey
  $buttonHoverColor: black
  $buttonSelectedColor: black

  @mixin circle($r)
    width: $r * 2
    height: $r * 2
    border-radius: 100%

  article
    +grid
    padding-top: 80px
    padding-bottom: 10px
    .content
      grid-column: 1 / span 20
      .carousel-component
        +aspect-ratio(16, 9)
      .mediaSelectors
        grid-column: 1 / span 20
        height: 80px
        margin: auto
        display: flex
        justify-content: space-between
        align-items: center
        user-select: none
        max-width: 100%
        label
          width: $dot-radius
          height: $dot-radius
          cursor: pointer
          position: relative
          input
            appearance: none
            outline: none
            cursor: pointer
            &:after 
              content: ""
              position: absolute
              top: 50%
              left: 50%
              +circle($dot-radius)
              margin-top: -$dot-radius / 10
              margin-left: -$dot-radius / 10
              background: $buttonInactiveColor
              transition: transform 666ms ease, color 100ms ease
              cursor: pointer
          &:hover
            input:after
              background: $buttonHoverColor
              transform: scale(1.5)
          &.selected
            input:after
              background: $buttonSelectedColor
              transform: scale(2)

    .image
      background: grey
      width: 100%

    .video
      width: 100%

    .radio
      
  +respond-to($tablet-landscape)  
    article
      +grid
      padding-top: 80px
      padding-bottom: 50px
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
        label
          width: $dot-radius
          height: $dot-radius
          outline: none
          cursor: pointer
          position: relative
          input
            appearance: none
            outline: none
            cursor: pointer
            &:after 
              content: ""
              position: absolute
              top: 50%
              left: 50%
              width: $dot-radius / 5
              height: $dot-radius / 5
              margin-top: -$dot-radius / 10
              margin-left: -$dot-radius / 10
              background: $buttonInactiveColor
              border-radius: 100%
              transition: transform 666ms ease, color 100ms ease
              cursor: pointer
          &:hover
            input:after
              background: $buttonHoverColor
              transform: scale(1.5)
          &.selected
            input:after
              background: $buttonSelectedColor
              transform: scale(2)

      .image
        background: grey
        width: 100%

      .video
        width: 100%

      .radio


</style>
