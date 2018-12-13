<template>
  <article class="studio-content">
    studio-content
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  export default {
    name: 'StudioContent',
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

  article.studio-content
</style>
