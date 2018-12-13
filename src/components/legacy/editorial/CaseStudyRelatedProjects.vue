<template>
  <div class='case-study-related-projects' v-if="project.next_project">
    <div class="next-project-image"></div>
    <div class="project-header">Next Project</div>
    <router-link :to="project.next_project.post_name" class="next-project-link">
      <span class="next-project-link big-type">{{project.next_project.post_title}}</span>
    </router-link>
    <router-link :to="project.type" class="gallery-link">
      <div>Back to Animation</div>
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
    text-decoration: none

  .next-project-link
    font-size: 24px
    grid-column: 3 / span 16
    line-height: 40px
    margin-bottom: span(2, 20)
    padding-bottom: 32px

  .gallery-link
    grid-column: 3 / span 16
    opacity: 0.5

+respond-to($tablet-landscape)
  .case-study-related-projects
    .project-header
      font-size: 24px
      font-weight: 700
      grid-column: 3 / span 16

    .next-project-link
      font-size: 60px
      grid-column: 3 / span 9
      line-height: 80px
      padding-bottom: 32px
</style>