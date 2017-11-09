<template>
  <div> <!-- wrapping in a root for build out sake -->

    <div class="media-wrapper" data-position="" data-fullscreen="false">
      <div class="media">
        <div class="image">
          <img src="https://placeimg.com/640/480/animals" />
        </div>
      </div>
    </div>

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

  </div>
</template>

<script>
export default {
	name: 'media-object',

	/*
	------------------------------------------
	| props:void (-)
	|
	| hero:object
	------------------------------------------ */
	props: [
    ],
  data: function() {
    return {

    }
  }
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
    grid-column: 2 / span 18

    h3
      font-size: 34px
      letter-spacing: 2.07px
      line-height: 36px
      margin-bottom: span(2,24)

    p
      margin-bottom: span(2,24)

  .media
    grid-column: 2 / span 18

    img
      width: 100%



+respond-to($tablet-landscape)
  .media-wrapper

    .media
      grid-column: 2 / span 19

    .media-copy
      display: flex
      flex-direction: column
      justify-content: flex-end

      p
        margin-bottom: 0

    &[data-position="left"]
      .media-copy
        grid-column: 2 / span 6

      .media
        grid-column: 9 / span 12

    &[data-position="right"]
      .media-copy
        grid-column: 15 / span 6

      .media
        grid-column: 2 / span 12

    &[data-fullscreen="true"]
      max-width: 100%
      .media
        grid-column: 1 / span 24

</style>