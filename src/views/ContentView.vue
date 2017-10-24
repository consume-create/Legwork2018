<template>
  <div id="content" v-show="projects">
    <div id="content-inner">
      <p>Page: {{ discipline }}</p>
      <p>Next: <router-link v-bind:to="{ path: nextPageLink }">{{ nextPage }}</router-link></p>
      <p v-show="project_search">Search: {{ project_search }}</p>
      <ul v-show="projects">
        <li v-for="project in projects">
          {{ project.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-view',
  props: ['discipline','project_search'],
  computed: {
    nextPage () {
      return this.$store.getters.nextPage;
    },
    nextPageLink () {
      return '/' + this.$store.getters.nextPage;
    },
    projects () {
      return this.$store.getters.projects;
    }
  },
  ssrInit ({ store, route }) {
    return store.dispatch('FETCH_PROJECTS');
  }
};
</script>

<style lang="sass">
@import "src/styles/global"

#content
  +grid
  padding-top: span(2, 24)

  #content-inner
    grid-column: 3 / span 20
    grid-row: 1

    ul
      display: flex
      flex-direction: row
      justify-content: space-between
      flex-wrap: wrap
      margin-top: span(1, 20)

      li
        display: inline-block
        width: span(9, 20)
        height: 0
        padding-bottom: span(9, 20)
        background-color: $gray
        margin-bottom: span(2, 20)
</style>
