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
  color: $color-button-text
  background: $color-button-bg
  padding: 0.5em 0.75em
  border-radius: 10px

  &[data-variant='bare']

  &[data-variant='icon']

</style>