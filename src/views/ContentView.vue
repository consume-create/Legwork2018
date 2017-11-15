<template>
  <div id="content" v-if="projects.length > 0">
    <div id="content-inner">
      <div id='content-cells'>
        <content-cell-view v-for="content in projects" :key="content.slug" :discipline="discipline" :content="content"></content-cell-view>
      </div>
    </div>
  </div>
</template>

<script>
import ContentCellView from 'components/content-view/ContentCellView.vue';

export default {
  name: 'content-view',

  /*
  ------------------------------------------
  | components:void (-)
  ------------------------------------------ */
  components: {
    ContentCellView
  },

  /*
  ------------------------------------------
  | computed:void (-)
  |
  | Computed properties
  ------------------------------------------ */
  computed: {

    /*
    ------------------------------------------
    | projects:void (-)
    |
    | Get the projects from the store based
    | on the current page.
    ------------------------------------------ */
    projects () {
      return this.$store.getters.projects;
    },

    discipline () {
      return this.$route.params.discipline;
    }
  },

  /*
  ------------------------------------------
  | ssrInit:void (-)
  |
  | Fetch the projects and fill the store
  | This happens serverside.
  ------------------------------------------ */
  ssrInit ({ store, route }) {
    return store.dispatch('FETCH_PROJECTS');
  }
};
</script>

<style lang="sass" scoped>
@import "src/styles/global"

#content
  +grid
  padding-top: span(2, 20)

  #content-inner
    grid-column: 3 / span 16
    grid-row: 1

    // NOTE: for power tools
    padding-top: 40px

    #content-cells
      display: flex
      flex-direction: row
      justify-content: space-between
      flex-wrap: wrap

+respond-to($tablet-landscape)
  #content
    padding-top: span(2, 24)

    #content-inner
      grid-column: 3 / span 18
      padding-top: 0px
      
</style>
