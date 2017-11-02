export default {
  APP_SCROLL: (state, obj) => {
    state.appScroll = obj;
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
