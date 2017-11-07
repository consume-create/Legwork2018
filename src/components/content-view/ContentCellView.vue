<!-- Loop over the content and based on type render the correct view -->
<template>
	<job-cell v-if="content.type === 'jobs'" :job="content"></job-cell>
	<quote-cell v-else-if="content.type === 'quotes'" :quote="content"></quote-cell>
	<project-cell v-else :project="content"></project-cell>
</template>

<script>
import ProjectCell from "./ProjectCell.vue";
import JobCell from "components/shared/JobCell.vue";
import QuoteCell from "components/shared/QuoteCell.vue";

export default {
  name: 'content-cell-view',

  /*
  ------------------------------------------
  | components:void (-)
  ------------------------------------------ */
  components: {
  	ProjectCell,
  	JobCell,
  	QuoteCell
  },

  /*
  ------------------------------------------
  | props:void (-)
  |
  | content:object
  ------------------------------------------ */
  props: [
  	'content'
  ]
}
</script>

<style lang="sass">
@import "src/styles/global"

.content-cell
  display: inline-block
  width: span(16, 16)
  height: 0
  padding-bottom: span(9, 16)
  background:
    color: $gray
    size: cover
    position: center
  margin-bottom: span(2, 16)

  .cell-title
    font-size: 18px
    color: $black
    letter-spacing: 0
    line-height: 14px

    &:after
      content: ''
      display: block
      margin-top: 24px
      width: 26px
      height: 4px
      background: #000

+respond-to($tablet-landscape)
  .content-cell
    width: span(8, 18)
    padding-bottom: span(8, 18)
    margin-bottom: span(2, 18)
</style>
