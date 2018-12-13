<template>
  <div id="content" v-if="projects.length > 0">
    <div id="content-inner">
      <!-- for now -->
      <!-- pattern set 1 -->
      <div class="grid-set">
        <div class="grid-item grid-pos-1 grid-size-1" id="grid-item-1">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-2 grid-size-2" id="grid-item-2">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-3 grid-size-3" id="grid-item-3">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-4 grid-size-2" id="grid-item-4">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-5 grid-size-1" id="grid-item-5">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-6 grid-size-3" id="grid-item-6">
          <div class="grid-inner"></div>
        </div>
      </div>
      <!--/pattern set 1 -->

      <!-- pattern set 2 -->
      <div class="grid-set">
        <div class="grid-item grid-pos-1 grid-size-1" id="grid-item-7">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-2 grid-size-2" id="grid-item-8">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-3 grid-size-3" id="grid-item-9">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-4 grid-size-2" id="grid-item-10">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-5 grid-size-1" id="grid-item-11">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-6 grid-size-3" id="grid-item-12">
          <div class="grid-inner"></div>
        </div>
      </div>
      <!--/pattern set 2 -->

      <!-- pattern set 3 -->
      <div class="grid-set">
        <div class="grid-item grid-pos-1 grid-size-1" id="grid-item-13">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-2 grid-size-2" id="grid-item-14">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-3 grid-size-3" id="grid-item-15">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-4 grid-size-2" id="grid-item-16">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-5 grid-size-1" id="grid-item-17">
          <div class="grid-inner"></div>
        </div>
        <div class="grid-item grid-pos-6 grid-size-3" id="grid-item-18">
          <div class="grid-inner"></div>
        </div>
      </div>
      <!--/pattern set 3 -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'content-view',

  /*
  ------------------------------------------
  | components:void (-)
  ------------------------------------------ */
  components: {
  },

  /*
  ------------------------------------------
  | computed:void (-)
  |
  | Computed properties
  ------------------------------------------ */
  computed: {

    /*
    ------------------------------------------
    | projects:void (-)
    |
    | Get the projects from the store based
    | on the current page.
    ------------------------------------------ */
    projects () {
      return this.$store.getters.projects;
    },

    discipline () {
      return this.$route.params.discipline;
    }
  },
};
</script>

<style lang="sass" scoped>
@import "src/styles/global"

#content
  #content-inner
    // NOTE: for power tools
    padding-top: 48px

    .grid-set
      +grid
      padding-top: span(2, 20)

      // all
      .grid-item
        grid-column: 3 / span 16
        padding-bottom: span(2, 16)

        &:last-of-type
          padding-bottom: 0px

        .grid-inner
          width: 100%
          padding-bottom: 56.25%
          background-color: $dark-gray
          cursor: pointer
          opacity: 1
          transition: opacity 333ms linear

          &.on
            opacity: 1

+respond-to($tablet-landscape)
  #content
    #content-inner
      .grid-set
        padding-top: span(2, 24)

        &:last-of-type
          padding-bottom: span(2, 24)

        // all
        .grid-item
          padding-bottom: 0px

        // sizes
        .grid-size-1
          .grid-inner
            padding-bottom: 75%

        .grid-size-2
          .grid-inner
            padding-bottom: 100%

        .grid-size-3
          .grid-inner
            padding-bottom: 56.25%

        // positions
        .grid-pos-1
          grid-column: 5 / span 8

        .grid-pos-2
          grid-column: 15 / span 6

          .grid-inner
            margin-top: 50%

        .grid-pos-3
          grid-column: 6 / span 11

          .grid-inner
            margin-top: span(2, 11)

        .grid-pos-4
          grid-column: 4 / span 6

          .grid-inner
            margin-top: span(5, 6)

        .grid-pos-5
          grid-column: 12 / span 8

          .grid-inner
            margin-top: span(2, 8)

        .grid-pos-6
          grid-column: 7 / span 11

          .grid-inner
            margin-top: span(2, 11)

</style>
