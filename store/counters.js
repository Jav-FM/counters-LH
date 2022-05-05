export const state = () => ({
  counters: []
})

export const mutations = {
  add(state, counter) {
    state.counters.push(counter)
  },
  remove(state, { counter }) {
    state.counters.splice(state.counters.indexOf(counter), 1)
  }
}
