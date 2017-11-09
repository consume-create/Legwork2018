<template>
  <div id="case-study" v-bind:class="discipline" v-if="project" @scroll="onCaseStudyScroll">
  	<div id="case-study-content" >
      <case-study-hero></case-study-hero>
      <case-study-overview :project="project"></case-study-overview>
      <media-object></media-object>
	  </div>
  </div>
</template>

<script>
import CaseStudyHero from "components/editorial/CaseStudyHero.vue";
import CaseStudyOverview from "components/editorial/CaseStudyOverview.vue";
import MediaObject from "components/editorial/MediaObject.vue";

export default {
  name: 'case-study-view',
  components: {
    CaseStudyHero,
    CaseStudyOverview,
    MediaObject
  },
  computed: {
  	discipline () {
      return this.$route.params.discipline;
    },
  	project () {
  		return this.$store.getters.project;
  	}
  },
  watch: {
  	project: function(){
  		let locked = typeof this.project == "object" ? true : false;
  		this.$store.dispatch('SET_WIN_SCROLL', {locked});

  		// active scroll
  		if( locked ){
		    this.$store.dispatch('SET_ACTIVE_SCROLL', 'caseStudy');
		  }
  	}
  },
  methods: {
  	onCaseStudyScroll(e){
  		let offset = e.srcElement.scrollTop;
      this.$store.dispatch('SET_CASE_STUDY_SCROLL', {offset});
  	}
  },
  ssrInit({ store, route}) {
  	if( route.params.project ){
  		// scroll lock
      let locked = true;
      store.dispatch('SET_WIN_SCROLL', {locked});

      // active scroll
      store.dispatch('SET_ACTIVE_SCROLL', 'caseStudy');
  	}
  }
};
</script>

<style lang="sass" scoped>
@import "src/styles/global"
#case-study
	position: fixed
	top: 0px
	left: 0px
	background:
		color: white
	height: 100vh
	width: 100vw
	z-index: 1
	overflow: scroll

	#case-study-content
		position: relative
		min-height: 200vh
</style>
