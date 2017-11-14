<template>
	<div class='content-cell job' data-type='job'>
		{{job.job_title}}
	</div>
</template>

<script>
export default {
	name: 'job-cell',

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
@import "src/styles/content-cell"

.job
	@extend .content-cell
	z-index: 0

</style>