<template>
  <article class="hero" :class="data.style">
    <div ref="bg" class="bg"></div>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  export default {
    name: 'Hero',
    props: ['data'],
    mounted() {
      const media = this.data.media
      if (/image/.test(media.mimetype)) {
        this.$refs['bg'].style.backgroundImage = `url(${media.url})`
      }
    },
    data() {
      return { schema }
    },
  }

  const schema = {
    type: 'object',
    required: ['style', 'media'],
    properties: {
      style: {
        type: 'string',
        title: 'Style',
        default: 'default',
        enum: ['faded', 'default'],
      },
      media: {
        type: 'object',
        required: ['url', 'mimetype'],
        properties: {
          url: {
            type: 'string',
            format: 'uri',
          },
          mimetype: {
            type: 'string',
          },
        },
      },
    },
  }
</script>

<style lang="sass">
  @import "src/styles/global"

  article.hero
    width: 100%
    height: 100vh
    &.faded
      background-color: $faded

  div.bg
    width: 100%
    height: 100%
    background-position: 50% 50%
    background-repeat: no-repeat
    background-size: contain
</style>
