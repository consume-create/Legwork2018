<template>
  <div class="case-study-overview">
    <div class="overview-header">
      <text-header :project="project"></text-header>
    </div>
    <div class="link">
      <link-comp url="http://bla.com" variant="play" text="Watch Video"></link-comp>
    </div>
    <text-list></text-list>
    <text-body></text-body>
  </div>
</template>

<script>
import TextHeader from "components/shared/TextHeader.vue";
import LinkComp from "components/shared/LinkComp.vue";
import TextList from "components/shared/TextList.vue";
import TextBody from "components/shared/TextBody.vue";


export default {
  name: 'case-study-overview',

  components: {
    TextHeader,
    LinkComp,
    TextList,
    TextBody
  },

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

<style lang='sass' scoped>
@import "src/styles/global"

.case-study-overview
  +grid
  margin-bottom: span(3,24)

  .overview-header
    grid-column: 2 / span 18
    margin-bottom: span(3,24)

  .link
    grid-column: 2 / span 18
    margin-bottom: span(4,24)

  .text-list
    grid-column: 2 / span 18
    margin-bottom: span(4,24)

  .text-body
    grid-column: 2 / span 18


+respond-to($tablet-landscape)
  .case-study-overview

    .overview-header
      grid-column: 6 / span 15

    .link
      grid-column: 2 / span 3

    .text-list
      grid-column: 6 / span 3

    .text-body
      grid-column: 10 / span 11

</style>