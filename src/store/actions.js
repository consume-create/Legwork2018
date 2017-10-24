// import { init } from '../api';
export default {

  /*
  ------------------------------------------
  | FETCH_PROJECTS:void (-)
  |
  | Fetches data and projects
  |
  | TODO:
  | - Hook up to final CMS
  | - Mutate the data for our store
  |
  | NOTES:
  | Currently just runs a return but will
  | eventually call the api to grab data before
  | rendering the page/site.
  ------------------------------------------ */
  FETCH_PROJECTS: ({ commit }) => {
    let _projects = [
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
    ];

    commit('PROJECTS', _projects);
  },

  SET_BIZ_POSITION: ({ commit }, obj) => {
    if(obj.delay === 0) {
      commit('BIZ_POSITION', obj);
    } else {
      setTimeout(() => commit('BIZ_POSITION', obj), obj.delay);
    }
  }
};
