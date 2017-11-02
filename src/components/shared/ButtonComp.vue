<template>
	<a :href="[url]" :data-icon="[icon]" :data-variant="[variant]" class="btn">{{text}}</a>
</template>

<script>
export default {
	name: 'button-comp',
  props: [
    'icon',
    'variant',
    'text'
    ],
  data: function() {
    return {
      'url': 'http://google.com'
    }
  }
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.btn
  padding: 18px 20px
  border-radius: 100px
  background: $color-button-bg
  text-align: center
  font-size: 14px
  color: $color-button-text
  text-decoration: none
  font-weight: $bold
  display: inline-block

  &[data-variant='bare']


  &[data-variant='icon']

</style>