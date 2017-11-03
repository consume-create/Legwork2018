import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state: {
      appScroll: {
        win: {
          offset: 0,
          locked: false
        }
      },
      appSize: {
        width: 0,
        height: 0,
        ratio: '',
        breakpoint: ''
      },
      header: {
        mode: '',
        transform: 0,
        mobileMenuMode: ''
      },
      bizPosition: '',
      transitionOrigin: '',
      pages: []
    },
    actions,
    mutations,
    getters
  });
}
