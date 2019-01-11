<template>
  <article class="media-gallery" :class='classes'>
    <div class="content">
      <vue-flickity ref="flickity" v-if='mediaCount > 1' :options="flickityOptions">
        <div 
          v-for="(mediaItem, index) in mediaItems" 
          class="carousel-cell" 
          :key="`${mediaItem.type}-item-${index}`"
        >  
          <picture-component v-if="mediaItem.type === 'image'" 
            :data="mediaItem"
            :key='`picture-${mediaItem.type}-item-${index}`'
          ></picture-component>
          <video-component v-else-if="mediaItem.type === 'video'"
            :video-id='mediaItem.videoId'
          ></video-component>
        </div> 
      </vue-flickity>
      <span v-else>
        <picture-component v-if="mediaItems[0].type === 'image'"  
          :data="mediaItems[0]"
          :key='`picture-${mediaItems[0].type}-item-${index}`'
        ></picture-component>
        <video-component v-else-if="mediaItems[0].type === 'video'"
          :video-id='mediaItems[0].videoId'
        ></video-component>
      </span>
    </div>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
import VueFlickity from "./shared/vue-flickity.vue";
import PictureComponent from "./shared/picture-component.vue";
import VideoComponent from "./shared/picture-component.vue";

export default {
  name: "MediaGallery",
  props: ["data"],
  data() {
    return {
      activeMediaIndex: 0,
      mediaCount: this.data.media.length, 
      mediaItems: this.data.media,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: this.data.media.length > 1,
        wrapAround: true,
        cellAlign: 'left',
        resize: false,
        setGallerySize: false,
        dragThreshold: 30,
        imagesLoaded: true,
      },
      schema,
    }
  },
  components: {
    VueFlickity,
    PictureComponent,
    VideoComponent
  },
  computed: {
    classes() {
      return [
        `${this.data.theme || 'light'}-theme`,
      ]
    }
  }
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

  $dot-radius: 4px

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
      .flickity-enabled
        /deep/ .flickity-viewport
          padding-bottom: calc(9 / 16 * 95%)
          background: $grandpas-basement
          overflow: hidden
          .flickity-slider 
            height: 100%

  /deep/ .flickity-page-dots
    width: 100%
    height: 50px
    position: absolute
    bottom: -70px
    list-style: none
    text-align: center
    line-height: 1
    margin: auto
    display: flex
    justify-content: center
    align-items: center
    user-select: none

  /deep/ .flickity-rtl .flickity-page-dots
    direction: rtl

  /deep/ .flickity-page-dots .dot
    display: block
    +circle($dot-radius * 5)
    cursor: pointer
    position: relative

    &::after
      background: black
      .dark-theme &
        background: white
      content: ""
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      +circle($dot-radius)
      opacity: 0.5
      transition: opacity 0.144s ease-in, transform 0.144s ease-in

    &:hover::after
      opacity: 0.75
      transform: translate(-50%, -50%) scale(1.4)

    &.is-selected::after
      opacity: 1
      transform: translate(-50%, -50%) scale(1.8)
      transform-origin: center center
      transition: opacity 0.144s ease-in, transform 0.144s ease-in

  +respond-to($tablet-landscape)  
    article
      +grid
      padding-top: 80px
      padding-bottom: 120px

      .content
        display: block
        grid-column: 5 / span 14

        .flickity-enabled
          /deep/ .flickity-viewport
            padding-bottom: calc(9 / 16 * 100%)

</style>
