<template>
  <article class="copy-block" :class="classes">
    <h3 v-html="data.headline"></h3>
    <p v-html="data.copy"></p>
  </article>
</template>

<script>
/*
* Copy Block 
* - displays headline copy pair, supports raw html. 
* @prop data - object containing headline, copy, and theme (light or dark)
*
*/
export default {
  name: 'CopyBlock',
  props: ['data'],
  computed: {
    classes() {
      return [`${this.data.theme || 'light'}-theme`]
    }
  }
};

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  article.copy-block
    margin-bottom: span(3,24)
    color: $black
    .dark-theme &
      color: $white
    h3
      margin-bottom: 40px
      line-height: 36px
    p
      opacity: 0.5
      line-height: 32px

  +respond-to($tablet-landscape)
    article.copy-block
      margin: 100px 0

</style>
