export default {
  WIN_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.win, obj);
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
  }
};
