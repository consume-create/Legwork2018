<template>
  <div id="watch-overlay">
    <div class="video-container">
      <video-component></video-component>
    </div>
  </div>
</template>
<script>

import VideoComponent from 'components/shared/VideoComponent.vue';

export default {
  name: 'watch-overlay',

  components: {
    VideoComponent
  },

  /*
  ------------------------------------------
  | props:void (-)
  |
  | Project:object
  ------------------------------------------ */
  props: [
  ],
}
</script>

<style lang='sass'>
@import "src/styles/global"

#watch-overlay
  width: 100%
  height: 100%
  text: $faded
  +grid

  .video-container
    grid-column: 3 / span 16
    align-self: center

+respond-to($tablet-landscape)
  #watch-overlay
    .video-container
      grid-column: 4 / span 18

</style>
