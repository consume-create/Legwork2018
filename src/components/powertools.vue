<template>
  <article class="powertools">
    <router-link to="?overlay=search">Search</router-link>
    <router-link to="?overlay=watch">Watch our Reel</router-link>
    <router-link to="?overlay=powerlist">Power List</router-link>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  export default {
    name: 'Powertools',
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

  article.powertools
</style>
