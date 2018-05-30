<template>
  <div class="case-study-hero">
    <!-- if video-id use vimdeo video embed -->
    <div class="hero-image" v-if="project.hero_type = 'image'"><img :src="project.hero_image.url" /></div>
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
    'project'
  ],
}
</script>

<style lang='sass'>
@import "src/styles/global"

.case-study-hero
  +grid
  width: 100%
  margin-bottom: span(3,24)

  .hero-image
    grid-column: 1 / span 20
    // background: $gray

    img
      width: 100%

</style>