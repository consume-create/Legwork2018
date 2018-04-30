<template>
  <div class='case-study-related-projects'>
    <div class="project-header">Similar Projects</div>
    <ul>
      <li v-for="project in projects">{{ project }}</li>
    </ul>
    <div class="gallery-link">Back to Gallery</div>
  </div>
</template>

<script>

export default {
  name: 'case-study-related-projects',

  data: function() {
    return {
      'projects': [
        'Einstein Brothers Twist n\' Dip',
        'Allstate Homeowners',
        'Nissan Zero Gravity'
      ],
    }
  },

  /*
  ------------------------------------------
  | props:void (-)
  |
  | overview:object
  ------------------------------------------ */
  props: [
  ],
}
</script>

<style lang='sass' scoped>
@import 'src/styles/global'

.case-study-related-projects
  +grid
  background: $black
  color: $white
  padding: span(2, 20) 0

  .project-header
    grid-column: 3 / span 16
    margin-bottom: span(2, 20)
    opacity: 0.5

  ul
    grid-column: 3 / span 16
    margin-bottom: span(2, 20)

    li
      font-size: 36px
      line-height: 42px
      padding-bottom: 32px

      &:last-of-type
        padding-bottom: 0

  .gallery-link
    grid-column: 3 / span 16
    opacity: 0.5

</style>