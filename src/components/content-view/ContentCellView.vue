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

<style lang='sass'>
@import "src/styles/global"

.content-cell
	display: inline-block
	width: span(9, 20)
	height: 0
	padding-bottom: span(9, 20)
	background:
	  color: $gray
	  size: cover
	  position: center
	margin-bottom: span(2, 20)

</style>