<template>
  <transition name="fadeIn">
    <picture class="picture-component" :class='classes' v-show='loaded'>
      <source :srcset="srcImageSmall" media="(max-width: 639px)" alt=''>
      <source :srcset="srcImageMed" media="(min-width: 640px) and (max-width: 1023px)" alt=''>
      <source :srcset="srcImageLarge" media="(min-width: 1024px)" alt=''>
      <img :src="srcImageLarge" v-on:load='onImageLoad'/>
    </picture>
  </transition>
</template>

<script>
export default {
  name: "PictureComponent",
  props: ["data", "aspect", "lazy", "fadeIn"],
  data() {
    return { 
      schema,
      loaded: false,
    };
  },
  computed: {
    srcImageSmall () {
      return this.data.url
      // return this.data.sizes.small + ', ' + this.data.sizes.small.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    },
    srcImageMed () {
      return this.data.url
      // return this.data.sizes.medium + ', ' + this.data.sizes.medium.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    },
    srcImageLarge () {
      return this.data.url
      // return this.data.sizes.large + ', ' + this.data.sizes.large.replace(/(\.[\w\d_-]+)$/i, 'x$1') + " 2x";
    },
    classes() {
      return {
        "16-9": this.data.aspect === '16-9',
      }
    }
  },
  methods: {
    onImageLoad() {
      this.loaded = true
    }
  }
};

const schema = {
  type: "object",
  required: [],
  properties: {}
};

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  picture
    img 
      +aspect-ratio(16, 9)
      width: 100%
  
  .fadeIn-enter-active 
    transition: opacity 666ms ease-in-out

  .fadeIn-enter-to 
    opacity: 1

  .fadeIn-enter 
    opacity: 0

</style>
