<template>
	<div class='content-cell job' data-type='job'>
		{{job.job_title}}
	</div>
</template>

<script>
import BaseCell from './BaseCell';

export default {
	extends: BaseCell,
	name: 'job-cell',

	/*
	------------------------------------------
	| props:void (-)
	|
	| job:object
	------------------------------------------ */
	props: [
		'job'
	],
	methods: {
		/*
		------------------------------------------
		| init:void (-)
		------------------------------------------ */
		init() {
			this.$store.dispatch('ADD_COMPONENT_TO_RENDER_QUEUE', this);
		},

		/*
		------------------------------------------
		| update:void (-)
		------------------------------------------ */
		update() {
			this.updateProps();

			// If it's in view
			if( this.position < this.$wn.height() && this.position > 0 ){
				$(this.$el).addClass('visible').removeClass('down');
			}

			// If it's out of view
			if( this.position < 0 ){
				$(this.$el).removeClass('visible').addClass('down');
			}
		}
	}
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
@import "src/styles/content-cell"

.job
	@extend .content-cell
	z-index: 0

</style>