<template>
  <article class="mobile-nav">
    mobile-nav
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  export default {
    name: 'MobileNav',
    props: ['data'],
    data() {
      return { schema }
    },
  }

  const schema = {
    type: 'object',
    required: [],
    properties: {
    },
  }
</script>

<style lang="sass">
  @import "src/styles/global"

  article.mobile-nav
</style>
