<template>
  <article class="bleed-image">
    <picture-component :data='data'></picture-component>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
import PictureComponent from './picture-component.vue'

export default {
  name: "BleedImage",
  components: {
    PictureComponent
  },
  props: ["data"],
  data() {
    return { schema };
  },
};

const schema = {
  type: "object",
  required: [],
  properties: {}
};

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  article.bleed-image
    padding: 50px 0
    .picture-component
      width: 100%

</style>
