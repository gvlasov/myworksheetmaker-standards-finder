import standards from '../../standards'

const standardsByCode = {}
const standardSelections = {};
for (const subject of standards) {
    for (const grade of subject.grades) {
        for (const domain of grade.domains) {
            for (const subdomain of domain.sub_domains) {
                for (const standard of subdomain.standards) {
                    if (standard.code === '') {
                        continue;
                    }
                    standardSelections[standard.code] = false
                    standardsByCode[standard.code] = standard
                }
            }
        }
    }
}

const state = () => ({
  standardSelections: standardSelections,
})

// getters
const getters = {
  standardSelection: (state) => (key) => {
    return state.standardSelections[key]
  },
  selectedStandards: (state) => {
      return Object.entries(state.standardSelections).map(([key, value]) => {
          if (value) {
              return standardsByCode[key]
          } else {
              return null
          }
      }).filter(i => i !== null);
  },
}

// actions
const actions = {
    addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
    },
    removeItemFromStandards ({ state, commit }, standard) {
        commit('removeItemFromStandards', { standard })
    },
    clearAllStandards ({ state, commit }) {
        commit('clearAllStandards')
    },
    setStandardSelection ({ state, commit }, {key, value}) {
        commit('setStandardSelection', {key, value})
    },
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.standardSelections[standard.code] = true
    },
    removeItemFromStandards (state, { standard }) {
        state.standardSelections[standard.code] = false
    },
    clearAllStandards (state) {
        for (let k in state.standardSelections) {
            state.standardSelections[k] = false
        }
    },
    setStandardSelection: (state, {key, value}) => {
        state.standardSelections[key] = value
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
