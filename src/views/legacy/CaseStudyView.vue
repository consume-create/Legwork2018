<template>
  <div id="case-study" v-bind:class="discipline" v-if="project" @scroll="onCaseStudyScroll">
    <div id="case-study-content">
      <case-study-hero :project="project"></case-study-hero>
      <case-study-overview :project="project"></case-study-overview>
      <project-block :block="block" v-for="block in project.project_blocks" :key="block.id"></project-block>
      <case-study-awards :project="project"></case-study-awards>
      <case-study-related-projects :project="project"></case-study-related-projects>
    </div>
  </div>
</template>

<script>
import CaseStudyHero from "components/editorial/CaseStudyHero.vue";
import CaseStudyOverview from "components/editorial/CaseStudyOverview.vue";
import ProjectBlock from "components/editorial/ProjectBlock.vue";
import CaseStudyAwards from "components/editorial/CaseStudyAwards.vue";
import CaseStudyRelatedProjects from "components/editorial/CaseStudyRelatedProjects.vue";

export default {
  name: 'case-study-view',

  components: {
    CaseStudyHero,
    CaseStudyOverview,
    ProjectBlock,
    CaseStudyAwards,
    CaseStudyRelatedProjects
  },
  computed: {
    discipline () {
      return this.$route.params.discipline;
    },
    project () {
      return this.$store.getters.project;
    }
  },
  methods: {
    onCaseStudyScroll(e){
      let offset = e.target.scrollTop;
      this.$store.dispatch('SET_PROJECT_SCROLL', {offset});
    }
  },
  // ssrInit({ store, route}) {
  //
  // }
};
</script>

<style lang="sass" scoped>
@import "src/styles/global"
#case-study
  position: absolute
  top: 0px
  left: 0px
  background:
    color: $faded
  height: 100vh
  width: 100vw
  z-index: 1
  overflow: scroll
  -webkit-overflow-scrolling: touch

  #case-study-content
    position: relative
    min-height: 200vh
</style>
