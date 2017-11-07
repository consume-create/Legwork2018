<template>
	<div class='content-cell project'>
		
		<router-link :to="project.path">{{project.project_name}}</router-link>
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
	]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
</style>