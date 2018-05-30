<template>
  <div class="media-wrapper"
  :data-media-type="media.acf_fc_layout"
  :data-fullscreen="media.fullscreen"
  :data-position="media.position">

    <div v-if="media.acf_fc_layout === 'media_gallery'" class="media">
      <vue-flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell" v-for="cell in media.media">
          <picture-comp v-if="cell.type === 'image'" :imageProps="cell.image"></picture-comp>
          <!-- <video-component v-if="cell.type === 'video'" :video-id="cell.vimeo_id"></video-component> -->
        </div>
      </vue-flickity>
    </div>

    <div v-if="media.acf_fc_layout === 'media_gallery_with_copy'" class="media-with-copy">
      <div class="media-copy">
        <h3>{{media.title}}</h3>
        <p>{{media.copy}}</p>
      </div>
      <div v-if="media.media.length > 1" class="media">
        <vue-flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" v-for="cell in media.media">
            <picture-comp v-if="cell.type === 'image'" :imageProps="cell.image"></picture-comp>
          </div>
        </vue-flickity>
      </div>
      <div v-else class="media">
        <picture-comp :imageProps="media.image.url"></picture-comp>
      </div>
    </div>

    <!-- <div v-if="media.acf_fc_layout === 'pull_quote'" class="media">
      pull quote
    </div>

    <div v-if="media.acf_fc_layout === 'process_scrubber'">
      scrubber
    </div> -->

  </div>

    <!-- <div class="media-wrapper" data-position="" data-fullscreen="false">
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
            <picture-comp :srcPath="project[0].media[0].image.sizes"></picture-comp>
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
          <picture-comp :srcPath="project[0].media[0].image.sizes"></picture-comp>
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="" data-fullscreen="true">
      <div class="media">
        <div class="image">
          <picture-comp :srcPath="project[0].media[0].image.sizes"></picture-comp>
        </div>
      </div>
    </div>

    <div class="media-wrapper" data-position="center" data-fullscreen="">
      <div class="media">
        <div class="image">
          <picture-comp :srcPath="project[0].media[0].image.sizes"></picture-comp>
        </div>
      </div>
    </div> -->
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
    'media'
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
    }
  },
}
</script>

<style lang='sass'>
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