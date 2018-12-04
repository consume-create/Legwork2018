<template>
  <div id="search-overlay">
    <div class="search-container">
      <input type="search" class="search-input big-type" placeholder="Search..." v-model="projectSearch" />
      <div class="search-results big-type">
        <transition-group
          name="staggered-fade"
          tag="ul"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
        >
          <li class="result" v-for="(result, index) in searchResults" v-bind:key="index" v-bind:data-index="index">
            <router-link :to="result.path">
              <span @click="onProjectClick">{{result.project_name }}</span>
            </router-link>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-overlay',

  data: function(){
    return {
      el: '.search-container',
      projectSearch: ''
    }
  },

  computed: {
    // TODO: test this more thouroughly with actual data and not crappy tag terms like 'egg' and 'eggs'
    searchResults() {
      // get all the projects that we've got from the CMS
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
  },
  methods: {
    /*
    ------------------------------------------
    | onProjectClick:void (-)
    ------------------------------------------ */
    onProjectClick () {
      this.$store.dispatch("TRANSITION", "project-grid");
    },

    beforeEnter: function (el) {
      el.classList = "";
    },
    enter: function (el) {
      var delay = el.dataset.index * 120
      setTimeout(function () {
        el.classList.add("list-fade");
      }, delay)
    },
    leave: function (el, done) {
      el.classList = "list-fade-bye";
      setTimeout(function () {
        done();
      }, 333);
    },
    afterLeave: function(el) {
      el.remove();
    }
  }
}
</script>

<style lang='sass'>
@import "src/styles/global"

#search-overlay
  width: 100%
  height: 100%
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
          opacity: 0
          transform: translateY(-10px)
          transition: all $fast $evil-ease

          &:nth-of-type(1)
            a
              color: #B0AFA9

          &:nth-of-type(2)
            a
              color: #D3D1CB

          a
            color: #DFDDD6
            text-decoration: none

        .list-fade
          opacity: 1
          transform: translateY(0)
          transition: all $fast $evil-ease

        .list-fade-bye
          opacity: 0
          transform: translateY(-10px)
          transition: all $fast $evil-ease




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
