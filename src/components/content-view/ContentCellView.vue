<!-- Loop over the content and based on type render the correct view -->
<template>
	<job-view v-if="content.type === 'jobs'" :job="content"></job-view>
	<quote-view v-else-if="content.type === 'quotes'" :quote="content"></quote-view>
	<project-view v-else :project="content"></project-view>
</template>

<script>
import ProjectView from "./ProjectView.vue";
import JobView from "components/shared/JobView.vue";
import QuoteView from "components/shared/QuoteView.vue";

export default {
  name: 'content-cell-view',

  /*
  ------------------------------------------
  | components:void (-)
  ------------------------------------------ */
  components: {
  	ProjectView,
  	JobView,
  	QuoteView
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