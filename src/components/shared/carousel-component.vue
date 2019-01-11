<template>
  <div class="carousel-component">
    <span v-for="(mediaItem, index) in items" :key="`${mediaItem.type}-item-${index}`" class="carousel-cell" >
      <picture-component v-if="mediaItem.type === 'image'"
        :data="mediaItem"
        :class="{active: index == selectedIndex}"
      ></picture-component>
      <video-component v-else-if="mediaItem.type === 'video'"
        :video-id='mediaItem.videoId'
      ></video-component>
    </span> 
  </div>
</template>

<script>
/*
*
* Carousel Component 
* - carousel of media (multiple media types)
* @param selectedIndex - index to show
* @param items - media items to display 
*
*/
import PictureComponent from "./picture-component.vue";
import VideoComponent from "./picture-component.vue";

export default {
  name: "CarouselComponent",
  components: {
    PictureComponent,
  },
  props: ["selectedIndex", "items"],
};

</script>

<style lang="sass" scoped>
@import "src/styles/global"

.carousel-component
  +aspect-ratio(1, 1)
  overflow: hidden
  position: relative
  .picture-component
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0
    opacity: 0
    margin: auto
    transition: opacity 144ms ease-in
    &.active
      opacity: 1.0
      transition: opacity 144ms ease-in


</style>