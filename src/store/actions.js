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
  FETCH_PROJECTS: () => {
    // init();
    // .then( (projects) => {
    //   _.each(projects, (project) => {
    //     // console.log(project.fields);
    //   });
    // });
    return;
  },

  SET_BIZ_POSITION: ({ commit }, obj) => {
    if(obj.delay === 0) {
      commit('BIZ_POSITION', obj);
    } else {
      setTimeout(() => commit('BIZ_POSITION', obj), obj.delay);
    }
  }
};
