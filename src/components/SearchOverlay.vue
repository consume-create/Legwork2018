<template>
  <div id="search-overlay">
    <div class="search-container">
      <input type="search" class="search-input big-type" placeholder="Search..."/>
      <div class="search-results big-type">
        <ul>
          <li>Celebrate!</li>
          <li>Cellulite</li>
          <li>Cells</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-overlay',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | Project:object
  ------------------------------------------ */
  props: [
  ],
}
</script>

<style lang='sass'>
@import "src/styles/global"

#search-overlay
  width: 100%
  height: 100%
  background: $color-bg-body
  text: $color-text

  .search-container
    +grid
    padding-top: 170px

    .search-input
      grid-column: 3 / span 16
      font-weight: bold
      appearance: none
      background: none
      border: none
      outline: none

    .search-results
      grid-column: 3 / span 16

      ul
        list-style: none
        margin: 0
        padding: 0

        li
          font-weight: bold

          &:nth-of-type(1)
            opacity: 0.25

          &:nth-of-type(2)
            opacity: 0.10

          &:nth-of-type(3)
            opacity: 0.05



+respond-to($tablet-landscape)
  #search-overlay
    .search-container
      padding-top: 266px

      .search-input
        grid-column: 8 / span 10

      .search-results
        grid-column: 8 / span 10

        ul
          margin-top: 20px

          li
            line-height: 80px

</style>
