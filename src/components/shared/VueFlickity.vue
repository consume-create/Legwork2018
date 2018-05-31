<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'vue-flickity',

    props: {
        options: {
            type: Object,

            default () {
                return {};
            }
        },
    },

    mounted () {
      this.init();
    },

    beforeDestroy () {
        this.flickity.destroy();
        this.flickity = null;
    },

    methods: {
        init() {
            let Flickity = require('flickity');
            this.flickity = new Flickity(this.$el, this.options);
            this.$emit('init', this.flickity);
        },

        next (isWrapped, isInstant) {
            this.flickity.next(isWrapped, isInstant);
        },

        previous (isWrapped, isInstant) {
            this.flickity.previous(isWrapped, isInstant);
        },

        select (index, isWrapped, isInstant) {
            this.flickity.select(index, isWrapped, isInstant);
        },

        selectedIndex () {
            return this.flickity.selectedIndex
        },

        selectCell (value, isWrapped, isInstant) {
            this.flickity.selectCell( value, isWrapped, isInstant );
        },

        resize () {
            this.flickity.resize();
        },

        reposition () {
            this.flickity.reposition();
        },

        prepend (elements) {
            this.flickity.prepend(elements);
        },

        append (elements) {
            this.flickity.append(elements);
        },

        insert (elements, index) {
            this.flickity.insert(elements, index);
        },

        remove (elements) {
            this.flickity.remove(elements);
        },

        playPlayer () {
            this.flickity.playPlayer();
        },

        stopPlayer () {
            this.flickity.stopPlayer();
        },

        pausePlayer () {
            this.flickity.pausePlayer();
        },

        unpausePlayer () {
            this.flickity.unpausePlayer();
        },

        rerender () {
            this.flickity.destroy();
            this.init();
        },

        destroy () {
            this.flickity.destroy();
        },

        reloadCells () {
            this.flickity.reloadCells();
        },

        getCellElements () {
            this.flickity.getCellElements();
        },

        data () {
            return Flickity.data(this.$el);
        },

        on (eventName, listener) {
            this.flickity.on(eventName, listener);
        },

        off (eventName, listener) {
            this.flickity.off(eventName, listener);
        },

        once (eventName, listener) {
            this.flickity.once(eventName, listener);
        }
    },

};
</script>

<style lang="sass" scoped>
.flickity-enabled
  position: relative
  &:focus
    outline: none

  /deep/ .flickity-viewport
    overflow: hidden
    position: relative
    transition: height 0.2s
    // padding-bottom: 23%
    // height: 0

  /deep/ .flickity-slider
    position: absolute
    width: 100%
    height: 100%

.flickity-enabled.is-draggable
  -webkit-tap-highlight-color: transparent
  tap-highlight-color: transparent
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  .flickity-viewport
    cursor: move
    cursor: -webkit-grab
    cursor: grab
    &.is-pointer-down
      cursor: -webkit-grabbing
      cursor: grabbing


  /deep/ .flickity-page-dots
    position: absolute
    width: 100%
    bottom: -25px
    padding: 0
    margin: 0
    list-style: none
    text-align: center
    line-height: 1


  /deep/ .flickity-rtl .flickity-page-dots
    direction: rtl


  /deep/ .flickity-page-dots .dot
    display: inline-block
    width: 10px
    height: 10px
    margin: 0 8px
    background: #333
    border-radius: 50%
    opacity: 0.25
    cursor: pointer
    &.is-selected
      opacity: 1

//////////////////////////////

.flickity-enabled
  /deep/ .carousel-cell
    width: 100%
    // height: 430px
</style>