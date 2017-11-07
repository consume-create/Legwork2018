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
  | SET_WIN_SCROLL:void
  |
  | Sets win scroll in appScroll.
  ------------------------------------------ */
  SET_WIN_SCROLL: ({ commit }, obj) => {
    commit('WIN_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_MOBILE_MENU_SCROLL:void
  |
  | Sets mobileMenu scroll in appScroll.
  ------------------------------------------ */
  SET_MOBILE_MENU_SCROLL: ({ commit }, obj) => {
    commit('MOBILE_MENU_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_BIZ_WIDGET_SCROLL:void
  |
  | Sets bizWidget scroll in appScroll.
  ------------------------------------------ */
  SET_BIZ_WIDGET_SCROLL: ({ commit }, obj) => {
    commit('BIZ_WIDGET_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_CASE_STUDY_SCROLL:void
  |
  | Sets bizWidget scroll in appScroll.
  ------------------------------------------ */
  SET_CASE_STUDY_SCROLL: ({ commit }, obj) => {
    commit('CASE_STUDY_SCROLL', obj);
  },

  /*
  ------------------------------------------
  | SET_ACTIVE_SCROLL:void
  |
  | Sets active scroll.
  ------------------------------------------ */
  SET_ACTIVE_SCROLL: ({ commit }, str) => {
    commit('ACTIVE_SCROLL', str);
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
  | SET_HEADER:void
  |
  | Sets the header state.
  ------------------------------------------ */
  SET_HEADER: ({ commit }, obj) => {
    if(obj.delay === 0) {
      commit('HEADER', obj);
    } else {
      setTimeout(() => commit('HEADER', obj), obj.delay);
    }
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
  },

  /*
  ------------------------------------------
  | TRANSITION:void (-)
  |
  | Sets transition origin ( where a transition is triggered from )
  ------------------------------------------ */
  TRANSITION: ({commit}, origin) => {
    commit('TRANSITION_ORIGIN', origin);
  }
};
