<template>
	<h1 class='text-header'>
		{{project.project_name}}
	</h1>
</template>

<script>
export default {
	name: 'text-header',

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