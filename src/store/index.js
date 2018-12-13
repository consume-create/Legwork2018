import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export const STORE = {
  state: {
    data: {},

    windowDim: { width: 0, height: 0 },
    scrollPos: { x: 0, y: 0, locked: false },
  },
  actions,
  mutations,
  getters,
}
