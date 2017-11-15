export default {
  name: 'base-cell',
  props: [
  	'render'
  ],
  data: function() {
    return {
    };
  },
  mounted () {
		this.init();
	},
  methods: {
    init(){
    	console.log(this.render)
      this.$store.dispatch('ADD_COMPONENT_TO_RENDER_QUEUE', this);
    },
    update(){

    }
  },
  beforeDestroy() {
    this.$store.dispatch('REMOVE_COMONENT_FROM_RENDER_QUEUE', this);
  }
};