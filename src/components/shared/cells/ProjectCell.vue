<template>
	<div class='content-cell project' data-type='project'>
		<div class='project-background' :style="{ 'background-image': 'url(' + project.hero_image.url + ')' }"></div>
		<router-link :to="project.path" >
			<span @click="onProjectClick"></span>
		</router-link>
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
	methods: {
		onProjectClick () {
			this.$store.dispatch("TRANSITION", "project-grid");
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

</style>