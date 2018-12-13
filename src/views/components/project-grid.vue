<template>
  <article class="project-grid">
    <ul>
      <li><router-link v-for="p in page.pages" :to="p.path" :key="p.slug">{{p.data.title}}</router-link></li>
    </ul>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  export default {
    name: 'ProjectGrid',
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

  article.project-grid
</style>
