<template>
  <article class="media-gallery-with-copy">
  </article>
</template>

<script>
  export default {
    name: 'MediaGalleryWithCopy',
    props: ['data'],
    data() {
      return { schema }
    },
  }

  const schema = {
    type: 'object',
    theme: 'string', 
    required: [],
    properties: {
    },
  }
</script>

<style scoped lang="sass">
@import "src/styles/global"

</style>
