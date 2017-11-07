<template>
  <div class="text-list">
    <h3 class="list-header">Services Provided</h3>
    <ul>
      <li>Strategy</li>
      <li>UI</li>
      <li>Design</li>
      <li>Development</li>
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
	]
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.text-list

  .list-header
    margin-bottom: span(2,24)

  ul li
    opacity: 0.3
    letter-spacing: 1.29px
    line-height: 25px


</style>