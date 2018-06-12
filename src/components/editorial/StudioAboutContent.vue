<template>
  <div class="studio-about">
    <div id="studio-inner">
      <div class="studio-narrow-col">
        <div class="studio-narrow-sticky">
          <div class="studio-narrow-block">
            <h3 class="list-header">Locate</h3>
            <ul>
              <li>2854 Larimer St</li>
              <li>Denver, CO 80205</li>
            </ul>
          </div>

          <div class="studio-narrow-block">
            <h3 class="list-header">New Business</h3>
            <ul>
              <li>303.333.3333</li>
              <li>hotleads@LegworkStudio.com</li>
            </ul>
          </div>

          <div class="studio-narrow-block">
            <h3 class="list-header">Careers</h3>
            <ul>
              <li>303.333.3333</li>
              <li>jobs@LegworkStudio.com</li>
            </ul>
          </div>

          <div class="studio-narrow-block">
            <div class="social-icon">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.967 4.118c-2.1 0-3.84 1.77-3.84 3.973 0 2.204 1.71 3.974 3.84 3.974s3.841-1.8 3.841-3.974c0-2.173-1.74-3.973-3.84-3.973zm0 6.519c-1.35 0-2.46-1.149-2.46-2.546 0-1.397 1.11-2.545 2.46-2.545 1.35 0 2.46 1.148 2.46 2.545s-1.11 2.546-2.46 2.546z"/><ellipse cx="11.958" cy="4.025" rx="1" ry="1"/><path d="M14.209 1.697c-.78-.838-1.89-1.273-3.151-1.273H4.876c-2.61 0-4.35 1.8-4.35 4.501v6.364c0 1.334.42 2.483 1.26 3.32.81.808 1.89 1.212 3.12 1.212h6.122c1.29 0 2.37-.435 3.15-1.211.811-.807 1.231-1.956 1.231-3.29V4.925c0-1.304-.42-2.421-1.2-3.228zm-.18 9.623c0 .962-.27 1.738-.81 2.266-.54.527-1.29.807-2.191.807H4.906c-.9 0-1.65-.28-2.19-.807-.54-.56-.81-1.335-.81-2.297V4.925c0-.931.27-1.707.81-2.266.51-.528 1.29-.807 2.19-.807h6.182c.9 0 1.65.28 2.19.838.51.559.81 1.335.81 2.235v6.395h-.06z"/></g></svg>
            </div>
            <div class="social-icon">
              <svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.053l.522.685s1.076-.849 1.435-.424c.358.424 1.727 5.55 2.185 6.495.399.83 1.5 1.927 2.706 1.143 1.206-.783 5.217-4.211 5.935-8.258.717-4.047-4.827-3.2-5.413.326 1.467-.882 2.25.359 1.5 1.763C8.12 6.186 7.434 7.1 7.075 7.1c-.358 0-.633-.939-1.044-2.58C5.608 2.824 5.611-.232 3.848.115 2.185.44 0 3.053 0 3.053z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="studio-wide-col">

        <div class="studio-wide-block">
          <h2 class="studio-big-blurb med-type">We are an independent creative studio creating animated and interactive work for brands and agencies around the world</h2>
        </div>

        <div class="studio-wide-block block-stagger-right studio-slider">
          <div class="studio-slider-wrap">
              <vue-flickity ref="flickity" :options="flickityOptions">
                <div class="carousel-cell"><div class="content">Cell 1</div></div>
                <div class="carousel-cell"><div class="content">Cell 2</div></div>
                <div class="carousel-cell"><div class="content">Cell 3</div></div>
                <div class="carousel-cell"><div class="content">Cell 4</div></div>
              </vue-flickity>
          </div>
        </div>


        <div class="studio-wide-block">
          <h3 class="med-type">Animation</h3>
          <div class="block-sub-services">
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
          <h3 class="med-type">Interactive</h3>
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

        <div class="studio-wide-block">
          <h3 class="med-type">Careers</h3>
          <div class="block-sub-career-list">
            <ul>
              <li><a href="#">Motion Designer <i class="arrow"><svg width="31" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#F8F7F3" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M26 10H2M21.14 3L28 9.93 21 17"/></g></svg></i></a></li>
              <li><a href="#">Interactive Designer <i class="arrow"><svg width="31" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#F8F7F3" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M26 10H2M21.14 3L28 9.93 21 17"/></g></svg></i></a></li>
              <li><a href="#">Interactive Designer <i class="arrow"><svg width="31" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#F8F7F3" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M26 10H2M21.14 3L28 9.93 21 17"/></g></svg></i></a></li>
              <li><a href="#">Junior Animatior <i class="arrow"><svg width="31" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#F8F7F3" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M26 10H2M21.14 3L28 9.93 21 17"/></g></svg></i></a></li>
              <li><a href="#">3D Modeler <i class="arrow"><svg width="31" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#F8F7F3" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M26 10H2M21.14 3L28 9.93 21 17"/></g></svg></i></a></li>
            </ul>
          </div>
        </div>


        <div class="studio-wide-block studio-map-block">
          <div class="studio-map"></div>
          <div class="map-text">
            <h3 class="med-type">Locate</h3>
            <div>
              2854 Larimer St. <br />
              Denver, CO 80205
            </div>
          </div>

        </div>

        <div class="studio-wide-block">
          <h3 class="med-type">Money goes in awards come out.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFlickity from 'components/shared/VueFlickity.vue';
import PictureComp from 'components/shared/PictureComp.vue';

export default {
  name: 'studio-about',

  components: {
    VueFlickity,
    PictureComp
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        resize: true,
        dragThreshold: 30,
        adaptiveHeight: true,
        imagesLoaded: true,
        cellAlign: 'left'
      },
    }
  },
}
</script>

<style lang='sass'>
@import "src/styles/global"

#studio-inner
  +grid
  position: relative
  width: 100%

  .studio-narrow-col
    grid-column: 3 / span 16
    margin: 45px 0px
    position: relative

    .studio-narrow-sticky

      .studio-narrow-block
        margin-bottom: 50px

        &:last-of-type
          margin-bottom: 0

        h3
          margin-bottom: 28px

        .social-icon
          display: inline-block
          height: 24px
          margin-right: 20px
          width: 24px

          svg
            height: 100%
            fill: $faded

  .studio-wide-col
    grid-column: 3 / span 16

    .studio-wide-block
      +subgrid(12)
      margin-bottom: 80px

      h3
        grid-column: 1 / span 12
        margin-bottom: 15px

      .block-sub-services
        grid-column: 1 / span 12
        margin-bottom: 24px

      .block-sub-copy
        grid-column: 1 / span 12

      .studio-big-blurb
        grid-column: 1 / span 11

      .block-sub-career-list
        grid-column: 1 / span 12

        ul
          display: flex
          flex-wrap: wrap

          li
            box-sizing: border-box
            font-size: 30px
            font-weight: bold
            line-height: 40px
            padding: 0 20px 30px 0
            width: 100%

            a
              color: $white
              opacity: 0.2
              overflow: hidden
              position: relative
              text-decoration: none
              transition: all $fast $evil-ease

              i
                bottom: -5px
                opacity: 0
                position: absolute
                right: 0
                transform: translateX(0%)
                transition: all $fast $evil-ease
                width: 50px

              &:hover
                opacity: 1.0

                i
                  opacity: 1.0
                  transform: translateX(120%)
                  transition: all $fast $evil-ease

      .studio-map
        background: #ddd
        padding-bottom: 75%
        width: 100%

    .studio-slider
      .studio-slider-wrap
        grid-column: 1 / span 12

        .carousel-cell
          @include aspect-ratio(300, 167)
          background: pink
          width: 85%

        .flickity-page-dots
          width: 100%

        .flickity-page-dots .dot
          background: $white

    .studio-map-block
      display: none


// Tablet View
+respond-to($tablet-landscape)
  #studio-inner
    .studio-narrow-col
      grid-column: 3 / span 4
      margin: 0

    .studio-wide-col
      grid-column: 10 / span 12

      .studio-wide-block
        h3
          grid-column: 1 / span 11
          margin-bottom: 45px

        .block-sub-services
            grid-column: 1 / span 2
            margin-bottom: 0

        .block-sub-copy
          grid-column: 3 / span 8

        .studio-big-blurb
          margin-top: -20px

        .block-sub-career-list
          ul
            li
              font-size: 30px
              font-weight: bold
              line-height: 40px
              padding: 0 95px 80px 0
              width: 33.3%

      .block-stagger-right
        h3
          grid-column: 4 / span 8

        .block-sub-services
          grid-column: 4 / span 2

        .block-sub-copy
          grid-column: 6 / span 8

      .studio-slider
        .studio-slider-wrap
          grid-column: 2 / span 14

          .carousel-cell
            @include aspect-ratio(300, 167)
            width: 70%
            background: pink

          .flickity-page-dots
            width: 70%

      .studio-map-block
        display: grid

        .studio-map
          grid-column: 1 / span 7

        .map-text
          grid-column: 9 / span 3

+respond-to($average-desktop)
  #studio-inner
    .studio-wide-col
      .studio-wide-block
        .block-sub-copy
          grid-column: 3 / span 6

      .block-stagger-right
        .block-sub-copy
          grid-column: 6 / span 6


// Very specific overide for larger displays and the text wrapping
// on these smaller grid items. Could likely improve this
+respond-to($retina-macbook)
  #studio-inner
    .studio-wide-col
      .studio-wide-block
        .block-sub-career-list
          ul
            li
              padding: 0 175px 80px 0


</style>