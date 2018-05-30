<template>
  <picture>
    <!-- <source :srcset="srcImageSmall"
      media="(max-width: 639px)">
    <source :srcset="srcImageMed"
      media="(min-width: 640px) and (max-width: 1023px)">
    <source :srcset="srcImageLarge"
      media="(min-width: 1024px)"> -->
    <img :src="imageProps.url" alt="alt text"
        >
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
    'imageProps'
  ],
  computed: {
    // srcImageSmall () {
    //   console.log(imageProps.sizes.thumbnail);
    //   return imageProps.sizes.thumbnail + ', ' + imageProps.sizes.thumbnail.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    // },
    // srcImageMed () {
    //   return imageProps.sizes.medium + ', ' + imageProps.sizes.medium.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    // },
    // srcImageLarge () {
    //   // console.log(imageProps);
    //   // return imageProps.sizes.large + ', ' + imageProps.sizes.large.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    // }
  },
}
</script>

<style lang='sass' scoped>
picture img
  width: 100%
</style>