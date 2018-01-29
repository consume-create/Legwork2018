<template>
  <picture>
    <source :srcset="srcPath"
      media="(max-width: 639px)">
    <source :srcset="srcPath"
      media="(min-width: 640px) and (max-width: 1023px)">
    <source :srcset="srcPath"
      media="(min-width: 1024px)">
    <img :src="srcPath" :alt="srcPath"
        :srcset="srcPath">
  </picture>
</template>

<script>
export default {
	name: 'picture-comp',

	/*
	------------------------------------------
	| props:void (-)
	|
	| Project:object
	------------------------------------------ */
	props: [
    'srcPath'
  ],
  methods: {
    init() {
    }
  }
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"
</style>