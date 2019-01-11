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
@import "src/styles/global"

.flickity-enabled
  position: relative
  &:focus
    outline: none

  /deep/ .flickity-viewport
    overflow: hidden
    position: relative
    transition: height 0.2s

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

//////////////////////////////

.flickity-enabled
  /deep/ .carousel-cell
    width: 95%
    margin: 0
    opacity: 0.50
    transition: opacity 0.333s ease-in

		& .is-selected
			opacity: 1.0
			transition: opacity 0.333s ease-in

+respond-to($tablet-landscape)
	.flickity-enabled
		/deep/ .carousel-cell
			width: 100%
			opacity: 0

			&.is-selected
				opacity: 1
				width: 100%


</style>