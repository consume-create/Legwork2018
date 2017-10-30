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
  padding: 12px 8px
  border-radius: 18px
  background: $color-button-bg
  text-align: center
  color: $color-button-text

  &[data-variant='bare']

  &[data-variant='icon']

</style>