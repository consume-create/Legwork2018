<template>
  <div class='case-study-related-projects'>
    <div class="next-project-image"></div>
    <div class="project-header">Next Project</div>
    <router-link :to="project.next_project.post_name" >
      <span class="big-type">{{project.next_project.post_title}}</span>
    </router-link>
    <router-link :to="project.type" >
      <div class="gallery-link">Back to Animation</div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'case-study-related-projects',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | overview:object
  ------------------------------------------ */
  props: [
    'project'
  ],
}
</script>

<style lang='sass'>
@import 'src/styles/global'

.case-study-related-projects
  +grid
  background: $black
  color: $white
  padding: span(2, 20) 0

  .project-header
    font-size: 24px
    font-weight: 700
    grid-column: 3 / span 16
    margin-bottom: span(2, 20)
    opacity: 0.5

  a
    color: $white
    font-weight: 700
    grid-column: 3 / span 16
    line-height: 80px
    margin-bottom: span(2, 20)
    max-width: 500px
    padding-bottom: 32px
    text-decoration: none

  .gallery-link
    grid-column: 3 / span 16
    opacity: 0.5

</style>