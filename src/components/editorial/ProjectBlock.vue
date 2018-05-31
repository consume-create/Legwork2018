<template>
  <div class="project-block" :data-block-type="block.acf_fc_layout">

    <div class="block-container" v-if="block.acf_fc_layout === 'media_gallery'"
    :data-fullscreen="block.fullscreen"
    :data-position="block.position">
      <div class="project-media" v-if="block.media.length > 1">
        <vue-flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" v-for="cell in block.media">
          <picture-comp v-if="cell.type = 'image'" :imageProps="cell.image"></picture-comp>
          </div>
        </vue-flickity>
      </div>
      <div v-else class="project-media">
        <div class="media-container" v-for="cell in block.media">
          <picture-comp v-if="cell.type = 'image'" :imageProps="cell.image"></picture-comp>
        </div>
      </div>
    </div>


    <div class="block-container" v-if="block.acf_fc_layout === 'media_gallery_with_copy'"
    :data-fullscreen="block.fullscreen"
    :data-position="block.position" >
      <div class="project-media" v-if="block.media.length > 1">
        <vue-flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell" v-for="cell in block.media">
          <picture-comp v-if="cell.type = 'image'" :imageProps="cell.image"></picture-comp>
          </div>
        </vue-flickity>
      </div>
      <div v-else class="project-media">
        <div class="media-container" v-for="cell in block.media">
          <picture-comp v-if="cell.type = 'image'" :imageProps="cell.image"></picture-comp>
        </div>
      </div>

      <div class="project-copy">
        <h3>{{block.title}}</h3>
        <p>{{block.copy}}</p>
      </div>
    </div>


    <div class="block-container" v-if="block.acf_fc_layout === 'copy_block'" :data-position="block.position">
      <div class="project-copy">
        <h3>{{block.title}}</h3>
        <p>{{block.copy}}</p>
      </div>
    </div>


    <div class="block-container" v-if="block.acf_fc_layout === 'pull_quote'" :data-position="block.position">
      <div class="project-copy">
        <h3>{{block.quote}}</h3>
        <p>{{block.quote_author}}</p>
      </div>
    </div>

    <div class="block-container" v-if="block.acf_fc_layout === 'process_scrubber'">
      Scrubber
    </div>
  </div>
</template>

<script>
import VueFlickity from 'components/shared/VueFlickity.vue';
import VideoComponent from 'components/shared/VideoComponent.vue';
import PictureComp from 'components/shared/PictureComp.vue';

export default {

  name: 'project-block',

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
    'block'
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
        adaptiveHeight: true
      },
    }
  },
}

</script>


<style lang='sass'>
@import "src/styles/global"

.project-block
  margin-bottom: 75px

  .block-container
    grid-auto-flow: dense
    +grid

    .project-media,
    .project-copy
      grid-column: 3 / span 16

      img
        width: 100%
        display: block

      h3
        margin-bottom: 25px

      p
        margin-bottom: 40px

    .project-media + .project-copy
      margin-top: 40px

  &[data-block-type="media_gallery"]
    .block-container
      &[data-fullscreen="true"]
        .project-media
          grid-column: 1 / span 20



+respond-to($tablet-landscape)
  .project-block
    margin-bottom: 195px

    .block-container
      .project-media,
      .project-copy
        grid-column: 3 / span 16

        h3
          margin-bottom: 50px

        p
          margin-bottom: 0px

      .project-media + .project-copy
        margin-top: 0px


    &[data-block-type="media_gallery"]
      .block-container
        &[data-fullscreen="true"]
          .project-media
            grid-column: 1 / span 20

        &[data-position="left"]
          .project-media
            grid-column: 10 / span 11

        &[data-position="right"]
          .project-media
            grid-column: 3 / span 11

    &[data-block-type="media_gallery_with_copy"]
      .block-container
        &[data-fullscreen="true"]
          .project-media
            grid-column: 1 / span 20

        &[data-position="left"]
          .project-copy
            grid-column: 3 / span 6

          .project-media
            grid-column: 10 / span 11

        &[data-position="right"]
          .project-copy
            grid-column: 15 / span 6

          .project-media
            grid-column: 3 / span 11


    &[data-block-type="copy_block"]
      .block-container
        &[data-position="left"]
          .project-copy
            grid-column: 3 / span 6

        &[data-position="right"]
          .project-copy
            grid-column: 15 / span 6


    &[data-block-type="pull_quote"]
      .block-container
        &[data-position="left"]
          .project-copy
            grid-column: 3 / span 6

        &[data-position="right"]
          .project-copy
            grid-column: 15 / span 6


+respond-to($largest-screens)
  .project-block
    margin-bottom: 300px


</style>

