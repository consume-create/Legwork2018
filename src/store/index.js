import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state: {
      bizPosition: '',
      discipline: '',
      project: '',
      pages: [
        {
          title: 'animation',
          projects: [
            {
              title: 'project-1',
              hero_image: '../image.jpg'
            },
            {
              title: 'project-2',
              hero_image: '../image.jpg'
            },
            {
              title: 'project-3',
              hero_image: '../image.jpg'
            }
          ]
        },
        {
          title: 'interactive',
          projects: [
            {
              title: 'project-4',
              hero_image: '../image.jpg'
            },
            {
              title: 'project-5',
              hero_image: '../image.jpg'
            }
          ]
        },
        {
          title: 'experiential',
          projects: [
            {
              title: 'project-6',
              hero_image: '../image.jpg'
            }
          ]
        }
      ]
    },
    actions,
    mutations,
    getters
  });
}
