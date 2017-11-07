<template>
<<<<<<< Updated upstream
  <div id="case-study" v-bind:class="discipline" v-if="project">
  	{{ project.project_name }}
=======
  <div id="case-study">
    <h1>Case Study</h1>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
  name: 'case-study-view',
  computed: {
  	discipline () {
      return this.$route.params.discipline;
    },
  	project () {
  		return this.$store.getters.project;
  	}
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
		color: white
	min-height: 100vh
	min-width: 100vw
	z-index: 1000
</style>
