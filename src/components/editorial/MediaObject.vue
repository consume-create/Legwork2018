<template>
  <div> <!-- wrapping in a root for build out sake -->

   <div class="media-wrapper" data-position="" data-fullscreen="false">
    <div class="media">
      <vue-flickity ref="flickity" :options="flickityOptions" >
        <div class="carousel-cell"><img src="https://placeimg.com/1024/576/nature/grayscale" /></div>
        <div class="carousel-cell"><video-component></video-component></div>
        <div class="carousel-cell"><img src="https://placeimg.com/1024/576/nature/grayscale" /></div>
        <div class="carousel-cell"><img src="https://placeimg.com/1024/576/nature/grayscale" /></div>
        <div class="carousel-cell"><img src="https://placeimg.com/1024/576/nature/grayscale" /></div>
      </vue-flickity>
     </div>
    </div>

    <div class="media-wrapper" data-position="" data-fullscreen="false">
      <div class="media">
        <div class="video">
          <video-component></video-component>
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
          <img src="https://placeimg.com/1024/576/nature/grayscale" />
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
          <img src="https://placeimg.com/1024/576/nature/grayscale" />
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="" data-fullscreen="true">
      <div class="media">
        <div class="image">
          <img src="https://placeimg.com/1024/576/nature/grayscale" />
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="center" data-fullscreen="">
      <div class="media">
        <div class="image">
          <img src="https://placeimg.com/1024/576/nature/grayscale" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VueFlickity from 'components/shared/VueFlickity.vue';
import VideoComponent from 'components/shared/VideoComponent.vue';


export default {

  name: 'media-object',

  components: {
      VueFlickity,
      VideoComponent
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
                dragThreshold: 30,
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
      grid-column: 3 / span 18

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
        grid-column: 10 / span 11

    &[data-position="right"]
      .media-copy
        grid-column: 15 / span 6

      .media
        grid-column: 3 / span 11

    &[data-position="center"]
      max-width: 100%
      .media
        grid-column: 7 / span 13

    &[data-fullscreen="true"]
      max-width: 100%
      .media
        grid-column: 1 / span 24
</style>