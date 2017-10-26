<template>
	<div class='content-cell quote'>
		{{quote.quote}}
	</div>
</template>

<script>
export default {
	name: 'quote-view',
	props: ['quote']
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
</style>