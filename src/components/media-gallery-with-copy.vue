<template>
  <article class="media-gallery-with-copy" :class="classes">
    <div class="content" :data-position="data.position">
      <copy-block :data="data"></copy-block>
      <span class="media" v-if="mediaCount > 1">
        <vue-flickity :class="classes" ref="flickity" :options="flickityOptions">
          <div v-for="(mediaItem, index) in mediaItems" class="carousel-cell" :key="`${mediaItem.type}-${index}`">  
            <picture-component v-if="mediaItem.type === 'image'" :data="mediaItem"></picture-component>
            <!-- <video-component v-else-if="mediaItem.type === 'video'" :video-id="mediaItem.videoId"></video-component> -->
          </div> 
        </vue-flickity>
      </span>
      <span v-else class="media">
        <picture-component v-if="mediaItems[0].type === 'image'" :data="mediaItems[0]"></picture-component>
        <!-- <video-component v-else-if="mediaItems[0].type === 'video'" :video-id="mediaItems[0].videoId"></video-component> -->
      </span>
    </div>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
/*
*
* Media Gallery with Copy
* - a flickity carousel potentially displaying multimedia, with a copy block alongside
* @prop data - object containing an array of images, theme (light or dark), and positioning of carousel.
*
*/
import CopyBlock from "./shared/copy-block.vue";
import VueFlickity from "./shared/vue-flickity.vue";
import PictureComponent from "./shared/picture-component.vue";
import VideoComponent from "./shared/picture-component.vue";

export default {
  name: "MediaGalleryWithCopy",
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
        cellAlign: "left",
        resize: false,
        setGallerySize: false,
        dragThreshold: 30,
        imagesLoaded: true
      },
      schema
    };
  },
  components: {
    VueFlickity,
    PictureComponent,
    VideoComponent,
    CopyBlock,
  },
  computed: {
    classes() {
      return [`${this.data.theme || "light"}-theme`];
    }
  }
};

const schema = {
  type: "object",
  properties: {
    headline: {"$ref": "#/definitions/headline"},
    copy: {"$ref": "#/definitions/copy"},
    position: {
      type: "string",
      title: "Style",
      default: "left",
      description: "Position of Media",
      enum: ["left", "right"]
    },
    theme: {
      type: "string",
      title: "Theme",
      default: "light",
      description: "Theme of component. Is it a dark or light background.",
      enum: ["light", "dark"]
    },
    media: {
      type: "array",
      items: [{ $ref: "#/definitions/image" }, { $ref: "#/definitions/video" }],
      additionalItems: false,
      minItems: 1
    },
    
  },
  required: ["media", "headline", "copy"]
};
</script>

<style scoped lang="sass">
@import "src/styles/global"

article.media-gallery-with-copy
  padding-top: 80px
  padding-bottom: 120px
  &.dark-theme
    background: $grandpas-basement
  .content
    +grid
    .copy-block
      grid-column: 3 / 16
    .media
      grid-column: 1 / span 20
      .flickity-enabled
        /deep/ .flickity-viewport
          padding-bottom: calc(9 / 16 * 95%)
          background: $grandpas-basement
          overflow: hidden
          .flickity-slider 
            height: 100%

// Responsive styles
+respond-to($tablet-landscape)  
  article.media-gallery-with-copy
    .content
      .copy-block, .media
        grid-row: 1

      &[data-position='left']
        .copy-block
          grid-column: 15 / span 6
        .media
          grid-column: 3 / span 11

      &[data-position='right'] 
        .copy-block
          grid-column: 3 / span 6
        .media
          grid-column: 10 / span 11

+respond-to($tablet-landscape)  
  article.media-gallery-with-copy
    .content
      .copy-block, .media
        grid-row: 1

      &[data-position='left']
        .copy-block
          grid-column: 17 / span 6
        .media
          grid-column: 3 / span 11

      &[data-position='right'] 
        .copy-block
          grid-column: 3 / span 6
        .media
          grid-column: 12 / span 11

      .flickity-enabled
        /deep/ .flickity-viewport
          padding-bottom: calc(9 / 16 * 100%)

</style>
