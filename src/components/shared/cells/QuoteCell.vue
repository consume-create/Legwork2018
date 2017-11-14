<template>
	<div class='content-cell quote' data-type='quote'>
		<div class='quote-svg'>
			<svg v-html="quote.svg_image"></svg>
		</div>
    <div class="cell-title">
      What they're saying
    </div>
    <div class="copy">
      {{quote.quote}}
    </div>
	</div>
</template>

<script>
export default {
	name: 'quote-cell',

	/*
	------------------------------------------
	| props:void (-)
	|
	| quote:object
	------------------------------------------ */
	props: [
		'quote'
	]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
@import "src/styles/content-cell"

.quote
	z-index: 0

.copy
	position: relative
	font-size: 300%
	font-weight: bold
	letter-spacing: 0.31px
	line-height: 91px

.quote-svg
	position: absolute
	height: 100%
	width: 100%
	left: 0px
	top: 0px

svg
	position: absolute
	height: 100%
	right: 0px

.cell-title
  font-size: 18px
  color: $black
  letter-spacing: 0
  line-height: 14px

  &:after
    content: ''
    display: block
    margin-top: 24px
    width: 26px
    height: 4px
    background: #000

</style>