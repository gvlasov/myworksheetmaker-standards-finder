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
    }
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
