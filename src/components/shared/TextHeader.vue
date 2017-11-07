<template>
	<div class='text-header'>
		{{project.project_name}}
	</div>
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