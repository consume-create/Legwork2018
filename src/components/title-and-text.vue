<template>
  <article ref="bg" class="title-and-text" :class="data.style">
    <div class="content">
      <h1>{{data.title}}</h1>
      <p>{{data.text}}</p>
    </div>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  export default {
    name: 'TitleAndText',
    props: ['data'],
    mounted() {
      const media = this.data.media || {}
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
    required: ['title', 'text'],
    properties: {
      style: {
        type: 'string',
        title: 'Style',
        default: 'default',
        enum: ['full', 'left', 'right'],
      },
      title: {
        type: 'string',
        maxLength: 100,
      },
      text: {
        type: 'string',
      },
      media: {
        type: 'object',
        required: ['url', 'mimetype', 'width', 'height'],
        properties: {
          url: {
            type: 'string',
            format: 'uri',
          },
          mimetype: {
            type: 'string',
          },
          width: {
            type: 'integer'
          },
          height: {
            type: 'integer'
          }
        }
      },
    },
  }
</script>

<style scoped lang="sass">
  @import "src/styles/global"

  article.title-and-text
    &.left
      div.content
        max-width: 500px
        width: 100%
</style>
