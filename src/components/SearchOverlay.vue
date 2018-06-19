<template>
  <div id="search-overlay">
    <div class="search-container">
      <input type="search" class="search-input big-type" placeholder="Search..." v-model="projectSearch" />
      <div class="search-results big-type">
        <ul>
          <li class="result" v-for="result in searchResults">
            <a v-bind:href="result.path">
              {{ result.project_name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-overlay',

  data: function(){
    return {
      projectSearch: ''
    }
  },

  computed: {
    // TODO: test this more thouroughly with actual data and not crappy tag terms like 'egg' and 'eggs'
    searchResults() {
      return this.$store.getters.projects.filter(result => {
        // First check if project search input has a value from the user and 
        // if the object has project tags (if not, it's a quote or job opening)
        if (this.projectSearch !== '' && result.project_tags) {

          // project_tags is a nested array (of objects) inside each project
          // so we look at the `slug` value inside each and see if it
          // is inlcuded in our project search term
          let containsTag = result.project_tags.findIndex((tag) => {
            return tag.slug.includes(this.projectSearch.toLowerCase())
          })
          return containsTag > -1
        }
      })
    }
  }
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

          a
            color: $black
            text-decoration: none



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
