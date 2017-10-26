<template>
	<div class='content-cell job'>
		{{job.job_title}}
	</div>
</template>

<script>
export default {
	name: 'job-view',

	/*
	------------------------------------------
	| props:void (-)
	|
	| job:object
	------------------------------------------ */
	props: [
		'job'
	]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
</style>