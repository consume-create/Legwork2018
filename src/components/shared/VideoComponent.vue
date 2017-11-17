<template>
  <div class="video">
    <!-- if video-id use vimdeo video embed -->
    <div class="hero-image"></div>
    <no-ssr>
      <vimeo-player :video-id='124884771'></vimeo-player>
    </no-ssr>
    <!-- else load up an image -->
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
</style>