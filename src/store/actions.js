import { init } from '../api';
export default {

  /*
  ------------------------------------------
  | FETCH_PROJECTS:void
  |
  | Fetches data and projects
  ------------------------------------------ */
  FETCH_PROJECTS: ({ commit }) => {
    let _projects = [];

    return init()
      .then( (projects) => {
        _.each( projects, (projects, key) => {
          _projects.push({
            title: key,
            projects: projects
          });
        });
        commit('PROJECTS', _projects);
      });
  },

  /*
  ------------------------------------------
  | SET_APP_SCROLL:void
  |
  | Sets the global app scroll.
  ------------------------------------------ */
  SET_APP_SCROLL: ({ commit }, obj) => {
    commit('APP_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_APP_SIZE:void
  |
  | Sets the global app size.
  ------------------------------------------ */
  SET_APP_SIZE: ({ commit }, obj) => {
    commit('APP_SIZE', obj);
  },

  /*
  ------------------------------------------
  | SET_BIZ_POSITION:void
  |
  | Sets the biz widget position.
  ------------------------------------------ */
  SET_BIZ_POSITION: ({ commit }, obj) => {
    if(obj.delay === 0) {
      commit('BIZ_POSITION', obj);
    } else {
      setTimeout(() => commit('BIZ_POSITION', obj), obj.delay);
    }
  }
};
