<template>
  <article class="pull-quote" :data-position="data.position">
    <!-- <h3>{{data.quote}}</h3>
    <p>{{data.quote_author}}</p> -->
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
  &[data-position="left"]
    grid-column: 3 / span 6

  &[data-position="right"]
    grid-column: 15 / span 6

</style>