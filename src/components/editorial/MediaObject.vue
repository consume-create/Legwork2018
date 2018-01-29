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

    <div :data-position="project[0].position" :data-fullscreen="project[0].fullscreen" class="media-wrapper">
      <div class="media-copy">
        <h3>{{project[0].title}}</h3>
        <p>{{project[0].copy}}</p>
      </div>
      <div class="media">
        <div class="image">
            <picture-comp :srcPath="project[0].media[0].image.sizes.large"></picture-comp>
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
import PictureComp from 'components/shared/PictureComp.vue';


export default {

  name: 'media-object',

  components: {
      VueFlickity,
      VideoComponent,
      PictureComp
    },

	/*
	------------------------------------------
	| props:void (-)
	|
	| hero:object
	------------------------------------------ */
	props: [
    ],
  data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true,
                resize: true,
                dragThreshold: 30,
            },
            'project': [
                {
                  'acf_fc_layout': 'media_gallery_with_copy',
                  'title': 'Sample Gallery',
                  'copy': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt magna nec bibendum sagittis. Aliquam ligula quam, aliquam nec sodales non, sagittis sit amet sapien. Suspendisse ut velit at lorem vulputate sodales in sit amet eros. Fusce sagittis odio vel lacus aliquet, vel sagittis metus aliquam. Sed non pellentesque mauris. Donec accumsan ut tellus ut vestibulum. ',
                  'position': 'left',
                  'fullscreen': 'false',
                  'media': [
                    {
                      'type': 'image',
                      'image': {
                        'tile': 'main-1',
                        'caption': '',
                        'sizes': {
                          'thumbnail': 'https://assets.legwork.studio/20171106224501/main-1-150x150.jpg',
                          'thumbnail-width': 150,
                          'thumbnail-height': 150,
                          'medium': 'https://assets.legwork.studio/20171106224501/main-1-300x169.jpg',
                          'medium-width': 300,
                          'medium-height': 169,
                          'medium_large': 'https://assets.legwork.studio/20171106224501/main-1-768x432.jpg',
                          'medium_large-width': 768,
                          'medium_large-height': 432,
                          'large': 'https://assets.legwork.studio/20171106224501/main-1-1024x576.jpg',
                          'large-width': 1024,
                          'large-height': 576
                        }
                      }
                    }
                  ],
                },
              ],
        }
    },
}
</script>

<style lang='sass' scoped>
@import "src/styles/global"

.media-wrapper
  margin-bottom: 75px
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
      margin-bottom: 25px

    p
      margin-bottom: 40px

  .media
    grid-column: 3 / span 16

    img
      width: 100%
      display: block



+respond-to($tablet-landscape)
  .media-wrapper
    margin-bottom: 195px 

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

+respond-to($largest-screens)
  .media-wrapper
    margin-bottom: 300px

    &[data-position="left"]
        .media-copy
          grid-column: 3 / span 4

    &[data-position="right"]
        .media-copy
          grid-column: 15 / span 4

</style>