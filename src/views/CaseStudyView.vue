<template>
  <div id="case-study" v-bind:class="discipline" v-if="project" @scroll="onCaseStudyScroll">
    <div id="case-study-content">
      <case-study-hero></case-study-hero>
      <case-study-overview></case-study-overview>
      <media-object></media-object>
      <case-study-awards></case-study-awards>
    </div>
  </div>
</template>

<script>
import CaseStudyHero from "components/editorial/CaseStudyHero.vue";
import CaseStudyOverview from "components/editorial/CaseStudyOverview.vue";
import MediaObject from "components/editorial/MediaObject.vue";
import CaseStudyAwards from "components/editorial/CaseStudyAwards.vue";

export default {
  name: 'case-study-view',

  components: {
    CaseStudyHero,
    CaseStudyOverview,
    MediaObject,
    CaseStudyAwards
  },

  computed: {
    discipline () {
      return this.$route.params.discipline;
    },
    project () {
      return this.$route.params.project;
    }
  },
  methods: {
    onCaseStudyScroll(e){
      let offset = e.srcElement.scrollTop;
      this.$store.dispatch('SET_PROJECT_SCROLL', {offset});
    }
  },
  ssrInit({ store, route}) {

  }
};
</script>

<style lang="sass" scoped>
@import "src/styles/global"
#case-study
  position: absolute
  top: 0px
  left: 0px
  background:
    color: $color-bg-body
  height: 100vh
  width: 100vw
  z-index: 1
  overflow: scroll

  #case-study-content
    position: relative
    min-height: 200vh
</style>
