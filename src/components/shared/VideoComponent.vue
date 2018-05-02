<template>
  <div class="video">
    <no-ssr>
      <vimeo-player :video-id='124884771'></vimeo-player>
    </no-ssr>
  </div>
</template>

<script>
import Vue from "vue";
import NoSSR from 'vue-no-ssr';

export default {
  name: 'video-component',
  components: {
    'no-ssr': NoSSR
  },
  /*
  ------------------------------------------
  | props:void (-)
  |
  | hero:object
  ------------------------------------------ */
  props: [],
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

.video
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