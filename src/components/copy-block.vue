<template>
  <div class="copy-block" :class='classes'>
    <h3>{{headline}}</h3>
    <p>{{copy}}</p>
    <slot name="protosite" :schema="schema"/>
  </div>
</template>

<script>
/*
*
* Copy Block 
* - displays headline copy pair
* @param headline - main text
* @param copy - copy text
*
*/

export default {
  name: "CopyBlock",
  props: ["headline","copy"],
  data() {
    return { schema };
  },
  computed: { 
    classes() {
      if(this.data) {
        return {
          'light-theme': this.data.theme === 'light',
          'dark-theme': this.data.theme === 'dark', 
        }
      }
    },
  }
};

const schema = {
  type: "object",
  required: [],
  properties: {}
};

</script>

<style scoped lang="sass">
  @import "src/styles/global"

  .copy-block
    margin-bottom: span(3,24)
    color: $black
    .dark-theme &
      color: $white
    h3
      margin-bottom: 40px
      line-height: 36px
    p
      opacity: 0.5
      line-height: 32px

  +respond-to($tablet-landscape)
    .copy-block
      margin: 100px 0
      // grid-column: 3 / span 8

</style>
