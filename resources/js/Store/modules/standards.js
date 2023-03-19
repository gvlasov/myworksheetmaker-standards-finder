const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
    addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
    },
    removeItemFromStandardsByIndex ({ state, commit }, index) {
        commit('removeItemFromStandardsByIndex', { index })
    },
    clearAllStandards ({ state, commit }) {
        commit('clearAllStandards')
    },
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    removeItemFromStandardsByIndex (state, { index }) {
        state.items.splice(index, 1)
    },
    clearAllStandards (state) {
        state.items.splice(0, state.items.length)
    },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
