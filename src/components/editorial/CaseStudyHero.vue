<template>
  <div class="case-study-hero">
    <!-- if video-id use vimdeo video embed -->
    <div class="hero-image"></div>
    <!-- else load up an image -->
  </div>
</template>

<script>
export default {
	name: 'case-study-hero',
	/*
	------------------------------------------
	| props:void (-)
	|
	| hero:object
	------------------------------------------ */
	props: [
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

.case-study-hero
  +grid
  width: 100%
  margin-bottom: span(3,24)

  .hero-image
    grid-column: 1 / span 20
    background: $gray
    padding-bottom: 100%

</style>