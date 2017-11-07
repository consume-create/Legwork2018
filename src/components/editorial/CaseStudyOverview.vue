<template>
  <div class="case-study-overview">
    <div class="overview-header">
      <TextHeader></TextHeader>
    </div>
    <div class="overview-meta">
      <!-- if there's a button or link set -->
      <LinkComp></LinkComp>
      <!-- if not, set rule (pseudo el) -->

      <!-- if services provided exists -->
      <TextList></TextList>

      <!-- if overview description exists -->
      <TextBody></TextBody>
    </div>
  </div>
</template>

<script>
export default {
	name: 'case-study-overview',

	/*
	------------------------------------------
	| props:void (-)
	|
	| overview:object
	------------------------------------------ */
	props: [
    ],
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.case-study-overview
  margin: span(2, 24) 0

  .overview-header
    margin-bottom: span(2,24)

  .overview-meta
    +grid
    .link
      grid-column: 12
      +respond-to($tablet-landscape)
        grid-column: 3
    .text-list
      grid-column: 12
      +respond-to($tablet-landscape)
        grid-column: 3
    .text-body
      grid-column: 12
      +respond-to($tablet-landscape)
        grid-column: 6

</style>