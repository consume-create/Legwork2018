<template>
  <div id="biz-widget" :class="slideClass" @scroll="onBizWidgetScroll">
    <div id="biz-widget-inner">
      <div class="biz-widget-short-col">
        <div class="biz-widget-short-sticky">
          <router-link to="?slide=wide" v-if="slideClass === 'short'">Learn More &rarr;</router-link>
          <router-link to="?slide=short" v-if="slideClass === 'wide'">&larr; Learn Less</router-link>

          <div class="biz-block">
            <h3>Locate</h3>
            <ul>
              <li>2854 Larimer St</li>
              <li>Denver, CO 80205</li>
            </ul>
          </div>

          <div class="biz-block">
            <h3>New Business</h3>
            <ul>
              <li>303.333.3333</li>
              <li>hotleads@LegworkStudio.com</li>
            </ul>
          </div>

          <div class="biz-block">
            <h3>Careers</h3>
            <ul>
              <li>303.333.3333</li>
              <li>jobs@LegworkStudio.com</li>
            </ul>
          </div>

          <div class="biz-block">
            <div class="social-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M7.967 4.118c-2.1 0-3.84 1.77-3.84 3.973 0 2.204 1.71 3.974 3.84 3.974s3.841-1.8 3.841-3.974c0-2.173-1.74-3.973-3.84-3.973zm0 6.519c-1.35 0-2.46-1.149-2.46-2.546 0-1.397 1.11-2.545 2.46-2.545 1.35 0 2.46 1.148 2.46 2.545s-1.11 2.546-2.46 2.546z"/><ellipse cx="11.958" cy="4.025" rx="1" ry="1"/><path d="M14.209 1.697c-.78-.838-1.89-1.273-3.151-1.273H4.876c-2.61 0-4.35 1.8-4.35 4.501v6.364c0 1.334.42 2.483 1.26 3.32.81.808 1.89 1.212 3.12 1.212h6.122c1.29 0 2.37-.435 3.15-1.211.811-.807 1.231-1.956 1.231-3.29V4.925c0-1.304-.42-2.421-1.2-3.228zm-.18 9.623c0 .962-.27 1.738-.81 2.266-.54.527-1.29.807-2.191.807H4.906c-.9 0-1.65-.28-2.19-.807-.54-.56-.81-1.335-.81-2.297V4.925c0-.931.27-1.707.81-2.266.51-.528 1.29-.807 2.19-.807h6.182c.9 0 1.65.28 2.19.838.51.559.81 1.335.81 2.235v6.395h-.06z"/></g></svg>
            </div>
            <div class="social-icon">
              <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.053l.522.685s1.076-.849 1.435-.424c.358.424 1.727 5.55 2.185 6.495.399.83 1.5 1.927 2.706 1.143 1.206-.783 5.217-4.211 5.935-8.258.717-4.047-4.827-3.2-5.413.326 1.467-.882 2.25.359 1.5 1.763C8.12 6.186 7.434 7.1 7.075 7.1c-.358 0-.633-.939-1.044-2.58C5.608 2.824 5.611-.232 3.848.115 2.185.44 0 3.053 0 3.053z" fill="#000" fill-rule="nonzero"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="biz-widget-wide-col">
        <h2 class="biz-widget-big-blurb">We are an independent creative studio creating animated and interactive work for brands and agencies around the world</h2>

        <div class="biz-img"></div>

        <div class="biz-big-block block-stagger-left">
          <h3>Animation</h3>
          <div class="block-sub-serivces">
            <ul>
              <li>2D</li>
              <li>3D / CG</li>
              <li>Stop Motion</li>
              <li>Cel</li>
            </ul>
          </div>
          <div class="block-sub-copy">
            We have a versitile group of animators on staff with capabilities that range from 3D and 2D, to cel and stop motion, eth experience developing for TV, web, projection and interactive installations.
          </div>
        </div>

        <div class="biz-big-block block-stagger-right">
          <h3>Interactive</h3>
          <div class="block-sub-services">
            <ul>
              <li>Website</li>
              <li>Kiosks</li>
              <li>Games</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div class="block-sub-copy">
            In addition to our content creators, we have a team of UI designers and progressive developers who build everything from micro-sites and installations, to mobile games and brand platforms.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'biz-widget-view',
  computed: {
    slideClass () {
      return this.$store.state.bizPosition;
    }
  },
  watch: {
    '$route.query.slide'() {
      // biz position
      let pos = typeof this.$route.query.slide === 'undefined' ? '' : this.$route.query.slide;
      this.$store.dispatch('SET_BIZ_POSITION', { pos: pos, delay: 0 });
    }
  },
  methods: {
    /*
    ------------------------------------------
    | onBizWidgetScroll:void
    |
    | e:object - event object
    |
    | Handle biz widget scroll.
    ------------------------------------------ */
    onBizWidgetScroll(e) {
      // set biz widget scroll in the store
      let offset = e.srcElement.scrollTop;
      this.$store.dispatch('SET_STUDIO_SCROLL', {offset});
    }
  },
  ssrInit ({ store, route }) {
    // biz position
    let pos = typeof route.query.slide === 'undefined' ? '' : route.query.slide;
    return store.dispatch('SET_BIZ_POSITION', { pos: pos, delay: 0 });
  }
}
</script>

<style lang="sass">
@import "src/styles/global"

#biz-widget
  position: fixed
  top: 0px
  left: 0px
  width: 100%
  height: 100%
  background-color: #ccc
  transform: translate3d(100%, 0%, 0)
  visibility: hidden
  overflow: scroll

  &.short
    visibility: visible
    transform: translate3d(66%, 0%, 0)

  &.wide
    visibility: visible
    transform: translate3d(0%, 0%, 0)

#biz-widget-inner
  +grid
  position: relative
  width: 100%
  height: 500%
  padding-top: 11em

  .biz-widget-short-col
    grid-column: 2 / span 6
    position: relative

    .biz-widget-short-sticky
      position: sticky
      top: 20px

  .biz-widget-wide-col
    grid-column: 10 / span 12
    // +subgrid(16)


  .biz-block
    margin-bottom: 54px
    font-size: 12px
    line-height: 22px

    &:last-of-type
      margin-bottom: 0

    h3
      font-size: 18px
      margin-bottom: 6px

    .social-icon
      display: inline-block
      margin-right: 20px

  .biz-widget-big-blurb
    font-size: 45px
    line-height: 80px
    margin-bottom: 100px
    // grid-column: 1 / span 16

  .biz-img
    background: #ddd
    width: 600px
    height: 334px
    margin-bottom: 150px
    // grid-column: 1 / span 16

  .biz-big-block
    margin-bottom: 80px
    font-size: 14px
    line-height: 27px
    +subgrid(16)

    h3
      margin-bottom: 45px
      font-size: 45px
      line-height: 36px
      grid-column: 1 / span 16

    .block-sub-serivces
      grid-column: 1 / span 4

    .block-sub-copy
      grid-column: 5 / span 12

</style>
