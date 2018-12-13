<template>
  <div class='case-study-overview'>
    <div class='overview-header'>
      <text-header :text="project.project_name"></text-header>
    </div>
    <div class='link-container'>
      <link-comp :link="project.url" :text="project.url"></link-comp>
    </div>
    <text-list :services='project.services_provided'></text-list>
    <text-body v-html='project.overview_description'></text-body>
  </div>
</template>

<script>
import TextHeader from 'components/shared/TextHeader.vue';
import LinkComp from 'components/shared/LinkComp.vue';
import TextList from 'components/shared/TextList.vue';
import TextBody from 'components/shared/TextBody.vue';


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
  | overview:objectin
  ------------------------------------------ */
  props: [
    'project'
  ],
}
</script>

<style lang='sass'>
@import 'src/styles/global'

.case-study-overview
  +grid
  margin-bottom: span(3,24)

  .overview-header
    grid-column: 3 / span 16
    margin-bottom: 50px
    margin-left: -4px

  .link-container
    grid-column: 3 / span 16
    margin-bottom: 70px

  .text-list
    grid-column: 3 / span 16
    margin-bottom: 65px

  .text-body
    grid-column: 3 / span 16


+respond-to($tablet-landscape)
  .case-study-overview

    .overview-header
      grid-column: 7 / span 14
      margin-bottom: 115px

    .link-container
      grid-column: 3 / span 3
      margin-bottom: 0

    .text-list
      grid-column: 7 / span 3
      margin-bottom: 0

    .text-body
      grid-column: 11 / span 9
      margin-bottom: 0

+respond-to($largest-screens)
  .case-study-overview

    .text-body
      grid-column: 11 / span 6

</style>