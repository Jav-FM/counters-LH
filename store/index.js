
const state = () => ({
  counters: [],
  countersTotal: 0
})

const mutations = {
  incrementTotal(state) {
    state.countersTotal++
  },
  decreaseTotal(state) {
    state.countersTotal--
  },
  add(state, counter) {
    state.counters.push(counter)
  },
  remove(state, { counter }) {
    statelcountersTotal -= counter.count
    state.counters.splice(state.counters.indexOf(counter), 1)
  }
}

export {state, mutations}
