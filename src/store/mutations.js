export default {
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
