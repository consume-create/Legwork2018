export default {
  name: 'base-cell',
  methods: {
    init(){
      this.$store.dispatch('ADD_COMPONENT_TO_RENDER_QUEUE', this);
    },
    update(){
      console.log('update');
    }
  },
  destroyed() {
    this.$store.dispatch('REMOVE_COMONENT_FROM_RENDER_QUEUE', this);
  }
};