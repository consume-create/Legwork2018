<template>
	<a :href="[url]" :data-variant="[variant]" class="link">{{text}}</a>
</template>

<script>
export default {
	name: 'link-comp',
  props: [
    'url',
    'variant',
    'text'
    ]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.link
  color: $color-link

  &[data-variant='arrow']::after
    content: "arrow"
    display: inline-block

  &[data-variant='play']::after
    content: 'play'
    display: inline-block

</style>