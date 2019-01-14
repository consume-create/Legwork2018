<template>
  <article class="caption">
    <div class="content" :data-position="data.position">
      <copy-block :data="data"></copy-block>
    </div>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
/*
* Caption Component 
* - extends a copy block to a full width component. 
*/
import CopyBlock from './shared/copy-block.vue'

export default {
  name: 'Caption',
  props: ['data'],
  components: {
    CopyBlock
  },
  data() {
    return { schema };
  }
};

const schema = {
  type: 'object',
  properties: {
    'headline': {'$ref': '#/definitions/headline'},
    'copy': {'$ref': '#/definitions/copy'},
    position: {
      type: 'string',
      title: 'Style',
      default: 'left',
    description: 'Position of copy block',
      enum: ['left', 'right']
    },
    theme: {
      type: 'string',
      title: 'Theme',
      default: 'light',
      description: 'Theme of component. Is it a dark or light background.',
      enum: ['light', 'dark']
    },
  },
  required: ['headline', 'copy'],
};

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  article.caption
    padding: 80px 0
    +grid
    .content
      grid-column: 3 / span 16
      margin-bottom: span(3,24)
      h3
        margin-bottom: 40px
        line-height: 36px
      p
        color: $dark-gray
        line-height: 32px

  +respond-to($tablet-landscape)
    article.caption
      .content
        margin: 100px 0

        &[data-position="left"]
          grid-column: 3 / span 7

        &[data-position="right"]
          grid-column: 14 / span 7

</style>
