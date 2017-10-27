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
        win: 0
      },
      appSize: {
        width: 0,
        height: 0,
        ratio: '',
        breakpoint: ''
      },
      bizPosition: '',
      pages: []
    },
    actions,
    mutations,
    getters
  });
}
