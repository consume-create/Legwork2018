<template>
  <article class="caption">
    <div class="content">
      <copy-block :headline='data.headline' :copy='data.copy'></copy-block>
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
  name: "Caption",
  props: ["data"],
  components: {
    CopyBlock
  },
  data() {
    return { schema };
  }
};

const schema = {
  type: "object",
  properties: {
    "headline": {"$ref": "#/definitions/headline"},
    "copy": {"$ref": "#/definitions/copy"},
  },
  required: ["headline", "copy"],
};

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  article
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
    article
      .content
        margin: 100px 0
        grid-column: 3 / span 7

</style>
