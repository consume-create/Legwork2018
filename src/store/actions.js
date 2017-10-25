import { init } from '../api';
export default {

  /*
  ------------------------------------------
  | FETCH_PROJECTS:void (-)
  |
  | Fetches data and projects
  ------------------------------------------ */
  FETCH_PROJECTS: ({ commit }) => {
    let _projects = [];
    let _disciplines = [];

    return init()
      .then( (data) => {
        _.each(data, (project) => {
          let _discipline = project.discipline;

          // Check if the discipline exists, if not push it
          if( _disciplines.indexOf(_discipline) < 0 ){
            _disciplines.push({
              title: _discipline,
              projects: []
            });
          }
          let _dest = _.find(_disciplines, (d) => { return d.title == _discipline; });
          _dest.projects.push(project);
        });

        _projects = _disciplines;
        commit('PROJECTS', _projects);
      });
  },

  SET_BIZ_POSITION: ({ commit }, obj) => {
    if(obj.delay === 0) {
      commit('BIZ_POSITION', obj);
    } else {
      setTimeout(() => commit('BIZ_POSITION', obj), obj.delay);
    }
  }
};
