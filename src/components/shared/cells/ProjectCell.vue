<template>
	<div class='content-cell project' data-type='project' :data-primary='project.project_primary_color' :data-secondary='project.project_secondary_color'>
		<div class='project-background' :style="{ 'background-image': 'url(' + project.hero_image.url + ')' }"></div>
		<router-link :to="project.path" >
			<span @click="onProjectClick"></span>
		</router-link>

		<!-- Project Info -->
		<div class='project-info'>
			<div class='project-background'></div>
			<div class='info'>
				<h1 class='client'>{{ project.client }}</h1>
				<div class='project-name'>{{ project.project_name }}</div>
			</div>
		</div>
		<!-- / Project Info -->
	</div>
</template>

<script>
import BaseCell from './BaseCell';

export default {
	extends: BaseCell,
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
	watch: {
		y: {
			handler: 'translateCell'
		},
	},
	methods: {
		/*
		------------------------------------------
		| init:void (-)
		------------------------------------------ */
		init() {
			this.$store.dispatch('ADD_COMPONENT_TO_RENDER_QUEUE', this);
			this._$projectBackground = $(".project-background", this.$el);

			this._$projectBackground.css('background-color', this.project.project_primary_color)
		},

		/*
		------------------------------------------
		| onProjectClick:void (-)
		------------------------------------------ */
		onProjectClick () {
			this.$store.dispatch("TRANSITION", "project-grid");
		},

		/*
		------------------------------------------
		| update:void (-)
		------------------------------------------ */
		update() {
			this.updateProps();

			// If it's in view
			if( this.position < this.$wn.height() && this.position > 0 ){
				this.y = Math.min(Math.min(this.$wn.height() - (this.position + this.height), 0) * (-1), this.translateTarget);
				$(this.$el).addClass('visible').removeClass('down');
			}

			// If it's out of view
			if( this.position < 0 ){
				this.y = Math.max( this.position, -this.translateTarget);
				$(this.$el).removeClass('visible').addClass('down');
			}
		},

		/*
		------------------------------------------
		| translateCell:void (-)
		------------------------------------------ */
		translateCell() {
			$(this.$el).css({
				'transform': 'translate3d(0, '+this.y+'px, 0)'
			});
		}
	}
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
@import "src/styles/content-cell"

.project
	z-index: 1

.project-background
	position: absolute
	height: 100%
	width: 100%
	background:
		size: cover
		position: center

a,
span
	position: absolute
	top: 0px
	left: 0px
	height: 100%
	width: 100%
	z-index: 1

.project-info
	position: absolute
	top: 0px
	left: 0px
	height: 100%
	width: 100%
	z-index: 0

	.project-background
		opacity: .85

	.info
		position: absolute
		top: 50%
		width: 100%
		text:
			align: center
		padding:
			left: 10%
			right: 10%
		transform: translateY(-50%)

+respond-to($tablet-landscape)

	.project
		&:hover
			.project-info
				opacity: 1

				.project-background
					opacity: .8

		.project-info
			opacity: 0
			transition: .15s

			.project-background
				opacity: 0
				transition: opacity .15s

			.info
				text:
					align: left



</style>