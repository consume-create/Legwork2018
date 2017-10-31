<template>
	<div class='content-cell quote'>
    <div class="cell-title">
      What they're saying
    </div>
    <div class="quote-copy">
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

.quote-copy
  font-size: 70px
  font-weight: $bold
  letter-spacing: 0.31px
  line-height: 91px

</style>