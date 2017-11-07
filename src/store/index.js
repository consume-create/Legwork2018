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
        },
        mobileMenu: {
          offset: 0,
          locked: false
        },
        bizWidget: {
          offset: 0,
          locked: false
        }
      },
      activeScroll: 'win',
      appSize: {
        width: 0,
        height: 0,
        ratio: '',
        breakpoint: ''
      },
      header: {
        hieght: 0,
        mode: '',
        theme: 'dark',
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
