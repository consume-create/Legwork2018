export default {
  nextPage: (state) => {
    if( state.pages.length > 0 ){
      let _current = _.find(state.pages, {title: state.route.params.discipline});
      let _currentIndex = _.indexOf(state.pages, _current);
      let _nextIndex = _currentIndex < state.pages.length - 1 ? _currentIndex + 1 : 0;

      return state.pages[_nextIndex].title;
    }
  },
  projects: (state) => {
    let _projects = [];

    // If on a discipline
    if( state.route.params.discipline ){
      let _current = _.find(state.pages, {title: state.route.params.discipline});
      let _currentIndex = _.indexOf(state.pages, _current);
      _projects = _currentIndex < 0 ? null : state.pages[_currentIndex].projects;
    }

    // If search
    if( state.route.params.project_search ){
      let _search = state.route.params.project_search.split('+');
      _.each(_search, (term) => {
        _.each( state.pages, (page) => {
          let _project = _.find(page.projects, {slug: term});
          if( _project ){
            _projects.push(_project);
          }
        });
      });
    }

    return _projects;
  },
  project: (state) => {
    if( state.route.params.discipline ){
      let _discipline = _.find( state.pages, {title: state.route.params.discipline});
      let _project = _.find( _discipline.projects, { slug: state.route.params.project });
      return _project;
    }
  },
  transitionOrigin: (state) => {
    return state.transitionOrigin;
  },
  whereTheHellAreWe: (state) => {
    let section = '', project = '', studio = '', overlay = '', menu = '';

    // base section
    if(typeof state.route.params.discipline !== 'undefined') section = state.route.params.discipline;
    else if(typeof state.route.params.project_search !== 'undefined') section = 'collection';
    else section = 'home';

    // if case study
    if(typeof state.route.params.project !== 'undefined') project = '-project';

    // if studio is open
    if(state.bizPosition !== '') studio = '-studio';

    // if overlay is open
    if(state.overlay.shown) overlay = '-overlay';

    // if mobile menu is open
    if(state.header.menu === 'open') menu += '-menu';

    return section + project + studio + overlay + menu;
  }
};
