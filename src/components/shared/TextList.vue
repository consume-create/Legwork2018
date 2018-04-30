<template>
  <div class="text-list">
    <h3 class="list-header">Services</h3>
    <ul >
      <li v-for="service in services">{{ service }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'text-list',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | Project:object
  ------------------------------------------ */
  props: [
    'services'
  ]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.text-list

  .list-header
    margin-bottom: 28px

  ul li
    opacity: 0.3
    letter-spacing: 1.29px
    line-height: 18px
    margin-bottom: 14px

+respond-to($desktop)
.text-list
  ul li
    margin-bottom: 18px


</style>