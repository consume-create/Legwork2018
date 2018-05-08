<template>
  <div class="studio-about">
    <div id="studio-inner">
      <div class="studio-narrow-col">
        <div class="studio-narrow-sticky">
          <div class="studio-narrow-block">
            <h3>Locate</h3>
            <ul>
              <li>2854 Larimer St</li>
              <li>Denver, CO 80205</li>
            </ul>
          </div>

          <div class="studio-narrow-block">
            <h3>New Business</h3>
            <ul>
              <li>303.333.3333</li>
              <li>hotleads@LegworkStudio.com</li>
            </ul>
          </div>

          <div class="studio-narrow-block">
            <h3>Careers</h3>
            <ul>
              <li>303.333.3333</li>
              <li>jobs@LegworkStudio.com</li>
            </ul>
          </div>

          <div class="studio-narrow-block">
            <div class="social-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M7.967 4.118c-2.1 0-3.84 1.77-3.84 3.973 0 2.204 1.71 3.974 3.84 3.974s3.841-1.8 3.841-3.974c0-2.173-1.74-3.973-3.84-3.973zm0 6.519c-1.35 0-2.46-1.149-2.46-2.546 0-1.397 1.11-2.545 2.46-2.545 1.35 0 2.46 1.148 2.46 2.545s-1.11 2.546-2.46 2.546z"/><ellipse cx="11.958" cy="4.025" rx="1" ry="1"/><path d="M14.209 1.697c-.78-.838-1.89-1.273-3.151-1.273H4.876c-2.61 0-4.35 1.8-4.35 4.501v6.364c0 1.334.42 2.483 1.26 3.32.81.808 1.89 1.212 3.12 1.212h6.122c1.29 0 2.37-.435 3.15-1.211.811-.807 1.231-1.956 1.231-3.29V4.925c0-1.304-.42-2.421-1.2-3.228zm-.18 9.623c0 .962-.27 1.738-.81 2.266-.54.527-1.29.807-2.191.807H4.906c-.9 0-1.65-.28-2.19-.807-.54-.56-.81-1.335-.81-2.297V4.925c0-.931.27-1.707.81-2.266.51-.528 1.29-.807 2.19-.807h6.182c.9 0 1.65.28 2.19.838.51.559.81 1.335.81 2.235v6.395h-.06z"/></g></svg>
            </div>
            <div class="social-icon">
              <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.053l.522.685s1.076-.849 1.435-.424c.358.424 1.727 5.55 2.185 6.495.399.83 1.5 1.927 2.706 1.143 1.206-.783 5.217-4.211 5.935-8.258.717-4.047-4.827-3.2-5.413.326 1.467-.882 2.25.359 1.5 1.763C8.12 6.186 7.434 7.1 7.075 7.1c-.358 0-.633-.939-1.044-2.58C5.608 2.824 5.611-.232 3.848.115 2.185.44 0 3.053 0 3.053z" fill="#000" fill-rule="nonzero"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="studio-wide-col">

        <div class="studio-wide-block">
          <h2 class="studio-big-blurb">We are an independent creative studio creating animated and interactive work for brands and agencies around the world</h2>
        </div>

        <div class="studio-wide-block block-stagger-right">
          <div class="studio-img"></div>
        </div>


        <div class="studio-wide-block">
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

        <div class="studio-wide-block block-stagger-right">
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
  name: 'studio-about',
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

#studio-inner
  +grid
  position: relative
  width: 100%

  .studio-narrow-col
    grid-column: 4 / span 13
    margin-bottom: 45px
    position: relative

    +respond-to($tablet-landscape)
      grid-column: 3 / span 4
      margin-bottom: 0

    .studio-narrow-sticky
      .wide &
        +respond-to($tablet-landscape)
        position: sticky
        top: 20px

      .studio-narrow-block
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


  .studio-wide-col
    grid-column: 4 / span 13

    +respond-to($tablet-landscape)
      grid-column: 10 / span 12

    .studio-wide-block
      +subgrid(12)
      margin-bottom: 80px
      font-size: 14px
      line-height: 27px

      h3
        grid-column: 1 / span 12
        margin-bottom: 15px
        font-size: 22px
        line-height: 30px
        +respond-to($tablet-landscape)
          grid-column: 1 / span 11
          margin-bottom: 45px
          font-size: 45px
          line-height: 36px

      .block-sub-serivces
        grid-column: 1 / span 12
        margin-bottom: 24px
        +respond-to($tablet-landscape)
          grid-column: 1 / span 2
          margin-bottom: 0

      .block-sub-copy
        grid-column: 1 / span 12
        +respond-to($tablet-landscape)
          grid-column: 3 / span 6


      .studio-big-blurb
        font-size: 22px
        line-height: 46px
        grid-column: 1 / span 12
        +respond-to($tablet-landscape)
          font-size: 45px
          line-height: 80px

      .studio-img
        background: #ddd
        width: 100%
        padding-bottom: 75%

    .block-stagger-right

      .studio-img
        +respond-to($tablet-landscape)
          grid-column: 3 / span 9

      h3
        +respond-to($tablet-landscape)
          grid-column: 4 / span 8

      .block-sub-services
        +respond-to($tablet-landscape)
          grid-column: 4 / span 2

      .block-sub-copy
        +respond-to($tablet-landscape)
          grid-column: 6 / span 6
</style>