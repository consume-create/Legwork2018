<template>
	<div id='content'>
		<p>Page: {{ discipline }}</p>
		<p>Next: <router-link v-bind:to='{ path: nextPageLink }'>{{ nextPage }}</router-link></p>
		<p v-show='project_search'>Search: {{ project_search }}</p>
		<p v-show='projects'>Projects:</p>
		<ul v-show='projects'>
			<li v-for='project in projects'>
				{{ project.title }}
			</li>
		</ul>
	</div>
</template>

<script>

export default {
  name: 'content-view',
  props: ['discipline','project_search'],
  computed: {
  	nextPage () {
  		return this.$store.getters.nextPage;
	  },
	  nextPageLink () {
	  	return '/' + this.$store.getters.nextPage;
	  },
	  projects () {
	  	return this.$store.getters.projects;
	  }
	},
	asyncData ({ store, route: { params: { id }}}) {
    return store.dispatch('FETCH_PROJECTS');
  },
};
</script>

<style lang="sass">
  @import "src/styles/global"
</style>
