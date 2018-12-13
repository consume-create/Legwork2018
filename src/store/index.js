export const STORE = {
  state: {
    // this is for protosite, and is set via data.json when in ssr, and is in
    // window.__INITIAL_STATE__ when on the client.
    data: {},

    // view level state
    windowDim: { width: 0, height: 0 },
    scrollPos: { x: 0, y: 0, locked: false },
  },
  mutations: {
    // view level state
    windowDim: (state, obj) => Object.assign(state.windowDim, obj),
    scrollPos: (state, obj) => Object.assign(state.scrollPos, obj),
  },
}
