export default {
  name: 'base-cell',
  props: [
    'discipline'
  ],
  data: function() {
    return {
      $wn: null,
      type: null,
      translateTarget: 355,
      scaleTarget: .3,
      y: 0,
      scale: 1,
      opacity: 1,
      position: 0,
      height: 0,
      width: 0
    };
  },
  computed: {

    /*
    ------------------------------------------
    | scroll:void (-)
    |
    | Return the scroll
    ------------------------------------------ */
    scroll() {
      return this.$store.state.appScroll.win;
    }
  },
  mounted () {
    this.$wn = $(window);  
    this.type = $(this.$el).data('type');

		this.init();
	},
  methods: {

    /*
    ------------------------------------------
    | init:void (-)
    ------------------------------------------ */
    init(){},

    /*
    ------------------------------------------
    | update:void (-)
    |
    | Called if in the render queue
    ------------------------------------------ */
    update() {},

    /*
    ------------------------------------------
    | props:obj (-)
    |
    | @position - Position based on scroll
    | @height - The cell height
    | @width - The cell width
    ------------------------------------------ */
    updateProps() {
      if( this.$el ){
        this.position = Math.floor( this.$el.offsetTop - this.scroll.offset );
        this.width = $(this.$el).outerWidth();
        this.height = $(this.$el).outerHeight();
      }
    }
  },
  beforeDestroy() {
    this.$store.dispatch('REMOVE_COMONENT_FROM_RENDER_QUEUE', this);
  }
};