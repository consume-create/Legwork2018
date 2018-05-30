<template>
  <div class="case-study-awards">
    <div class="case-study-impact">
      <h3>Impact</h3>
      <div v-html="project.impact"></div>
    </div>
    <div class="case-study-recognition">
      <h3>Recognition</h3>
      <ul class="awards-box" v-if="project.awards.length">
        <li v-for="award in project.awards">
          <div v-html="award.logo_svg"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'case-study-awards',

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

.case-study-awards
  +grid
  margin-bottom: span(3,24)
  grid-auto-flow: dense

  h3
    margin-bottom: 34px

  p
    margin-bottom: 34px

  .case-study-impact
    grid-column: 3 / span 16
    margin-bottom: 75px

  .case-study-recognition
    grid-column: 3 / span 16
    margin-bottom: 75px

    .awards-box
      display: flex
      flex-basis: 25%

      li
        width: 25%

  +respond-to($tablet-landscape)
    .case-study-awards
      margin-bottom: 0

      h3
        margin-bottom: 50px

      p
        margin-bottom: 0

    .case-study-impact
      grid-column: 9 / span 11
      margin-bottom: 0

    .case-study-recognition
      grid-column: 3 / span 4
      margin-bottom: 0



</style>