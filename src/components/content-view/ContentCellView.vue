<!-- Loop over the content and based on type render the correct view -->
<template>
  <job-cell v-if="content.type === 'jobs'" :job="content"></job-cell>
  <quote-cell v-else-if="content.type === 'quotes'" :quote="content"></quote-cell>
  <project-cell v-else :project="content"></project-cell>
</template>

<script>
import ProjectCell from "components/shared/cells/ProjectCell.vue";
import JobCell from "components/shared/cells/JobCell.vue";
import QuoteCell from "components/shared/cells/QuoteCell.vue";

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
    'content',
    'discipline'
  ]
}
</script>

<style lang="sass">
@import "src/styles/global"

</style>
