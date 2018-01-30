<template>
  <picture>
    <source :srcset="srcImageSmall"
      media="(max-width: 639px)">
    <source :srcset="srcImageMed"
      media="(min-width: 640px) and (max-width: 1023px)">
    <source :srcset="srcImageLarge"
      media="(min-width: 1024px)">
    <img :src="srcPath" alt="alt text"
        :srcset="srcImageLarge">
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
  computed: {
    srcImageSmall () {
      return this.srcPath.thumbnail + ', ' + this.srcPath.thumbnail.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    },
    srcImageMed () {
      return this.srcPath.medium + ', ' + this.srcPath.medium.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    },
    srcImageLarge () {
      return this.srcPath.large + ', ' + this.srcPath.large.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    }
  },
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

picture img
  width: 100%
</style>