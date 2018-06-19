<template>
  <div id="powerlist-overlay">
    <div class="powerlist-container">

      <input type="text" class="powerlist-title big-type" placeholder="Add a title..." />

      <ul class="powerlist-items">
        <li>
          <div class="item-delete-btn">
            <div class="btn-container">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g stroke="#E9654D" stroke-width="3" fill="none" fill-rule="evenodd"><path d="M14.436 14.142l8.128 8.128M22.276 13.853l-8.129 8.128" stroke-linecap="square"/><path d="M34.351 18.029C34.351 9.176 26.837 2 18 2S2 9.176 2 18.029c0 8.852 7.163 16.028 16 16.028s16.351-7.176 16.351-16.028z"/></g></svg>
            </div>
          </div>
          <div class="item-thumbnail">
            <img src="https://gradientjoy.com/122x122" />
          </div>
          <div class="item-title section-header">
            Powerlist Item Header
          </div>
        </li>

        <li>
          <div class="item-delete-btn">
            <div class="btn-container">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g stroke="#E9654D" stroke-width="3" fill="none" fill-rule="evenodd"><path d="M14.436 14.142l8.128 8.128M22.276 13.853l-8.129 8.128" stroke-linecap="square"/><path d="M34.351 18.029C34.351 9.176 26.837 2 18 2S2 9.176 2 18.029c0 8.852 7.163 16.028 16 16.028s16.351-7.176 16.351-16.028z"/></g></svg>
            </div>          
          </div>
          <div class="item-thumbnail">
            <img src="https://gradientjoy.com/122x122" />
          </div>
          <div class="item-title section-header">
            Powerlist Item Header Two
          </div>
        </li>

        <li>
          <div class="item-delete-btn">
            <div class="btn-container">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g stroke="#E9654D" stroke-width="3" fill="none" fill-rule="evenodd"><path d="M14.436 14.142l8.128 8.128M22.276 13.853l-8.129 8.128" stroke-linecap="square"/><path d="M34.351 18.029C34.351 9.176 26.837 2 18 2S2 9.176 2 18.029c0 8.852 7.163 16.028 16 16.028s16.351-7.176 16.351-16.028z"/></g></svg>
            </div>          
          </div>
          <div class="item-thumbnail">
            <img src="https://gradientjoy.com/122x122" />
          </div>
          <div class="item-title section-header">
            Powerlist Item
          </div>
        </li>
      </ul>
      <div class="powerlist-grabber">
        <div class="powerlist-url">http://www.legworkstudio.com/1234935901859043</div>
        <div class="powerlist-copy">Grab URL</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'powerlist-overlay',

  /*
  ------------------------------------------
  | props:void (-)
  |
  | Project:object
  ------------------------------------------ */
  props: [
  ],
}
</script>

<style lang='sass'>
@import "src/styles/global"

#powerlist-overlay
  background: $color-bg-body
  height: 100%
  overflow-y: scroll
  text: $color-text
  width: 100%

  .powerlist-container
    padding-top: 140px
    +grid

    .powerlist-title
      appearance: none
      background: none
      border: none
      font-size: 22px
      font-weight: bold
      grid-column: 3 / span 16
      margin-bottom: 40px

    .powerlist-items
      grid-column: 3 / span 16

      li
        align-items: center
        display: flex
        margin-bottom: 40px

        .item-delete-btn
          flex-basis: 15%

          .btn-container
            height: 24px
            width: 24px

            svg
              width: 100%

        .item-thumbnail
          flex-basis: 25%

          img
            width: 100%

        .item-title
          flex-basis: 60%
          font-size: 18px
          font-weight: bold
          padding-left: 20px
        
    .powerlist-grabber
      grid-column: 3 / span 16

      .powerlist-url
        background: #E8E7E3
        border-radius: 25px
        color: #7C745D
        display: block
        font-size: 11px
        padding: 2px 10px

      .powerlist-copy
        background: $black
        border-radius: 25px
        color: $white
        display: inline-block
        font-weight: bold
        margin: 10px auto
        padding: 8px 16px

+respond-to($tablet-landscape)
  #powerlist-overlay
    .powerlist-container
      padding-top: 170px

      .powerlist-title
        font-size: 60px
        grid-column: 3 / span 16
        margin-bottom: 166px

      .powerlist-items
        grid-column: 3 / span 16

        li
          margin-bottom: 162px

          .item-delete-btn
            flex-basis: 80px

            .btn-container
              height: 36px
              width: 36px

          .item-thumbnail
            flex-basis: 122px

            img
              width: 100%
              max-width: 122px

          .item-title
            flex-basis: 40%
            font-size: 36px
            line-height: 40px
            padding-left: 43px
          
      .powerlist-grabber
        display: flex
        align-items: center

        .powerlist-url
          flex-basis: 80%
          font-size: 14px
          margin-right: 26px
          padding: 10px 27px

        .powerlist-copy
          flex-basis: 98px
          padding: 6px 16px
          text-align: center

</style>