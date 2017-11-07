export default {
  WIN_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.win, obj);
  },
  MOBILE_MENU_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.mobileMenu, obj);
  },
  BIZ_WIDGET_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.bizWidget, obj);
  },
  CASE_STUDY_SCROLL: (state, obj) => {
    Object.assign(state.appScroll.caseStudy, obj);
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
  }
};
