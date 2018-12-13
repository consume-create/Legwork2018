<template>
  <section class="page" :class="classes">
    <slot name="protosite" :schema="schema"/>
    <slot name="components"/>
  </section>
</template>

<script>
  export default {
    name: 'Page',
    data() {
      return { schema }
    },
    computed: {
      classes() {
        return [
          `${this.page.id}-page`,
          `${this.page.data.theme || 'light'}-theme`,
          `${this.page.data.type || 'default'}-type`,
        ]
      },
    },
  }

  const schema = {
    type: 'object',
    required: ['title'],
    properties: {
      title: {
        type: 'string',
        title: 'Page title',
        maxLength: 50,
      },
      slug: {
        type: 'string',
        title: 'Slug title',
        help: 'The slug will determine the path at which this page is accessible. Leave blank to default from the title. Allowed characters are letters, numbers and dashes.',
        maxLength: 100,
        pattern: '[0-9A-Za-z-]',
      },
      description: {
        type: 'string',
        title: 'Meta description',
        maxLength: 800,
        attrs: {
          type: 'textarea',
        },
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import 'src/styles/global'

  section.page
    height: 100vh
    box-sizing: border-box
    &.studio-type,
    &.error-type,
    &.project-type
      padding-top: 100px

  section.page.dark-theme
    background: $grandpas-basement
    color: $slight-white
</style>
