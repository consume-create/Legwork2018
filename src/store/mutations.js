export default {
  WIN_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.win, obj);
  },
  MENU_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.menu, obj);
  },
  STUDIO_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.studio, obj);
  },
  PROJECT_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.project, obj);
  },
  ACTIVE_SCROLL: (state, str) => {
    state.activeScroll = str;
  },
  APP_SIZE: (state, obj) => {
    state.appSize = obj;
  },
  HEADER: (state, { settings }) => {
    Object.assign(state.header, settings);
  },
  BIZ_POSITION: (state, { pos }) => {
    state.bizPosition = pos;
  },
  PROJECTS: (state, projects) => {
    state.pages = projects;
  },
  TRANSITION_ORIGIN: (state, origin) => {
    state.transitionOrigin = origin;
  },
  ADD_TO_RENDERER: (state, component) => {
    console.log('added', component._uid);
    state.animationQueue.push( component );
  },
  REMOVE_FROM_RENDERER: (state, component) => {
    let queue = _.remove(state.animationQueue, (c) => {
      c._uid = component._uid;
    });
    state.animationQueue = queue;
  }
};
