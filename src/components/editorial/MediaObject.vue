<template>
  <div> <!-- wrapping in a root for build out sake -->

   <!-- <div class="media-wrapper" data-position="" data-fullscreen="false">
      <div class="media"> -->
        <!-- <div class="image">  -->
          <vue-flickity ref="flickity" :options="flickityOptions" >
                <div class="carousel-cell"><div class="slide-inner">Slide 1</div></div>
                <div class="carousel-cell"><div class="slide-inner">Slide 2</div></div>
                <div class="carousel-cell"><div class="slide-inner">Slide 3</div></div>
                <div class="carousel-cell"><div class="slide-inner">Slide 4</div></div>
                <div class="carousel-cell"><div class="slide-inner">Slide 5</div></div>
            </vue-flickity>
        <!-- </div> -->
      <!-- </div>
    </div> -->

    <div class="media-wrapper" data-position="" data-fullscreen="false">
      <div class="media">
        <div class="video">
          <img src="https://placeimg.com/640/480/animals" />
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="left" data-fullscreen="false">
      <div class="media-copy">
        <h3>Media Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio voluptas accusantium magni enim necessitatibus, officia impedit? Non fugiat totam unde vel veritatis, quis tempore accusamus iusto, illo perspiciatis facilis.</p>
      </div>
      <div class="media">
        <div class="image">
          <img src="https://placeimg.com/640/480/animals" />
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="right" data-fullscreen="false">
      <div class="media-copy">
        <h3>Media Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio voluptas accusantium magni enim necessitatibus, officia impedit? Non fugiat totam unde vel veritatis, quis tempore accusamus iusto, illo perspiciatis facilis.</p>
      </div>
      <div class="media">
        <div class="image">
          <img src="https://placeimg.com/640/480/animals" />
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="" data-fullscreen="true">
      <div class="media">
        <div class="image">
          <img src="https://placeimg.com/1024/1024/animals" />
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="center" data-fullscreen="">
      <div class="media">
        <div class="image">
          <img src="https://placeimg.com/1024/648/animals" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VueFlickity from 'components/shared/VueFlickity.vue';

export default {

  name: 'media-object',

  components: {
      VueFlickity
    },

	/*
	------------------------------------------
	| props:void (-)
	|
	| hero:object
	------------------------------------------ */
	props: [
    ],
  data () {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true,
                resize: true,
                dragThreshold: 30

                // any options from Flickity can be used
            }
        }
    },
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.media-wrapper
  margin-bottom: span(3,24)
  grid-auto-flow: dense
  +grid

  &[data-fullscreen="true"]
    .media
      grid-column: 1 / span 20

  .media-copy
    grid-column: 3 / span 16

    h3
      font-size: 34px
      letter-spacing: 2.07px
      line-height: 36px
      margin-bottom: 34px

    p
      margin-bottom: 50px

  .media
    grid-column: 3 / span 16

    img
      width: 100%



+respond-to($tablet-landscape)
  .media-wrapper

    .media
      grid-column: 3 / span 19

    .media-copy
      display: flex
      flex-direction: column
      justify-content: flex-end

      h3
         margin-bottom: 50px

      p
        margin-bottom: 0

    &[data-position="left"]
      .media-copy
        grid-column: 3 / span 6

      .media
        grid-column: 10 / span 12

    &[data-position="right"]
      .media-copy
        grid-column: 16 / span 6

      .media
        grid-column: 3 / span 12

    &[data-position="center"]
      max-width: 100%
      .media
        grid-column: 7 / span 14

    &[data-fullscreen="true"]
      max-width: 100%
      .media
        grid-column: 1 / span 24

  ///

.flickity-enabled
  margin: 40px 0
  overflow: hidden
  user-select: none
  tap-highlight-color: transparent
  -webkit-tap-highlight-color: transparent
  outline: none

.carousel-cell
  width: 100%
  height: 400px
  margin-right: 10px

.flickity-page-dots
  bottom: 0px

/* white circles */
.flickity-page-dots .dot
  width: 12px
  height: 12px
  opacity: 1
  background: transparent
  border: 2px solid black

/* fill-in selected dot */
.flickity-page-dots .dot.is-selected
  background: black


.slide-inner
  width: 100%
  height: 400px
  background: gray
  display: flex
  justify-content: center
  text-align: center
  align-items: center
  color: #fff
  font-size: 40px
  font-weight: bold


</style>