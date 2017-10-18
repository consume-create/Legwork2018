<template>
	<div>
		<p>Page: {{ discipline }}</p>
		<p>Next: <router-link v-bind:to="{ path: nextPageLink }">{{ nextPage }}</router-link></p>
		<p v-show="project_search">Search: {{ project_search }}</p>
		<p v-show="projects">Projects:</p>
		<ul v-show="projects">
			<li v-for="project in projects">
				{{ project.title }}
			</li>
		</ul>
    <footer-view></footer-view>
	</div>
</template>

<script>
import FooterView from './FooterView.vue';

export default {
  name: 'content-view',
  props: ['discipline','project_search'],
  components: {
		FooterView
  },
  computed: {
  	nextPage () {
  		return this.$store.getters.nextPage;
	  },
	  nextPageLink () {
	  	return "/" + this.$store.getters.nextPage;
	  },
	  projects () {
	  	return this.$store.getters.projects;
	  }
	}
};
</script>