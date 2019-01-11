<template>
  <article class="pull-quote">
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  export default {
    name: 'PullQuote',
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

<style scoped lang="sass">
  @import "src/styles/global"

  article.pull-quote
</style>
