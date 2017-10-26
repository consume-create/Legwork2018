<template>
	<div class='content-cell project'>
		{{project.project_name}}
	</div>
</template>

<script>
export default {
	name: 'project-view',

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