<template>
  <div class="case-study-awards">
    <div class="case-study-impact">
      <h3>Impact</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ex magni nesciunt consequuntur voluptate, nulla quam impedit illo eius nihil aliquid incidunt reiciendis voluptatem numquam iure esse? Aliquid, vero officiis.</p>
    </div>
    <div class="case-study-recognition">
      <h3>Recognition</h3>
      <div class="awards-box"></div>
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
    ],
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.case-study-awards
  +grid
  margin-bottom: span(3,24)
  grid-auto-flow: dense

  h3
    font-size: 34px
    letter-spacing: 2.07px
    line-height: 36px
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
      background: $gray
      width: 225%
      height: 100px
      margin-left: -125%

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