<template>
  <div class="video-component">
    <no-ssr>
      <vimeo-player :video-id='videoId'></vimeo-player>
    </no-ssr>
  </div>
</template>

<script>
/*
*
* Video Component 
* @param selectedIndex - index to show
* @param items - media items to display 
* -legacy (unfinished, need to defined approach to video assets)
*/

import NoSSR from 'vue-no-ssr';

export default {
  name: 'VideoComponent',
  components: {
    'no-ssr': NoSSR
  },
  /*
  ------------------------------------------
  | props:void (-)
  |
  | hero:object
  ------------------------------------------ */
  props: [
    'videoId'
  ],
  data: function() {
    return {
      'hero_type': '',
      'hero_image': '',
      'vimeo_id': '',
    }
  }
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.video-component
  position: relative
  padding-bottom: 56.25%
  height: 0

  /deep/ iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>