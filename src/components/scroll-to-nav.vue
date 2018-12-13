<template>
  <article class="scroll-to-nav">
    Next up: <router-link :to="target.path">{{target.data.title}}</router-link>
    <slot name="protosite" :schema="schema"/>
  </article>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'ScrollToNav',
    props: ['data'],
    data() {
      return { schema }
    },
    computed: {
      ...mapState(['scrollPos']),
      target() {
        return this.$store.getters['protosite/findPage'](this.data.page_id)
      }
    },
    watch: {
      'scrollPos.y'(pos) {
        // console.log(pos)
      }
    }
  }

  const schema = {
    type: 'object',
    required: ['page_id'],
    properties: {
      page_id: {
        type: 'string',
      },
    },
  }
</script>

<style lang="sass">
  @import "src/styles/global"

  article.scroll-to-nav
    width: 100%
    height: 100vh
</style>
