<template>
  <div class='case-study-overview'>
    <div class='overview-header'>
      <text-header :text='project_name'></text-header>
    </div>
    <div class='link'>
      <link-comp :href='link_url' :class='link_variant'>{{link_text}}</link-comp>
    </div>
    <text-list :services='services'></text-list>
    <text-body v-html='overview_description'></text-body>
  </div>
</template>

<script>
import TextHeader from 'components/shared/TextHeader.vue';
import LinkComp from 'components/shared/LinkComp.vue';
import TextList from 'components/shared/TextList.vue';
import TextBody from 'components/shared/TextBody.vue';


export default {
  name: 'case-study-overview',

  data: function() {
    return {
      'project_name': 'Project Title',
      'link_url': 'http://google.com',
      'link_variant': 'link-play',
      'link_text': 'Watch Video',
      'services': [
        'Strategy',
        'UX',
        'Design',
        'Development'
      ],
      'overview_description': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt magna nec bibendum sagittis. Aliquam ligula quam, aliquam nec sodales non, sagittis sit amet sapien. Suspendisse ut velit at lorem vulputate sodales in sit amet eros. Fusce sagittis odio vel lacus aliquet, vel sagittis metus aliquam. Sed non pellentesque mauris. Donec accumsan ut tellus ut vestibulum.</p>',
    }
  },

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
  ],
}
</script>

<style lang='sass' scoped>
@import 'src/styles/global'

.case-study-overview
  +grid
  margin-bottom: span(3,24)

  .overview-header
    grid-column: 3 / span 16
    margin-bottom: 50px
    margin-left: -4px

  .link
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

    .link
      grid-column: 3 / span 3
      margin-bottom: 0

    .text-list
      grid-column: 7 / span 3
      margin-bottom: 0

    .text-body
      grid-column: 11 / span 9
      margin-top: -6px
      margin-bottom: 0

+respond-to($largest-screens)
  .case-study-overview

    .text-body
      grid-column: 11 / span 6

</style>