<template>
	<div class='content-cell project'>
		
		<router-link :to="project.path" >
			<span @click="onProjectClick">{{project.project_name}}</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'project-cell',

	/*
	------------------------------------------
	| props:void (-)
	|
	| Project:object
	------------------------------------------ */
	props: [
		'project'
	],

	methods: {
		onProjectClick () {
			this.$store.dispatch("TRANSITION", "project-grid");
		}
	}
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
</style>