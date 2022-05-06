export const state = () => ({
  countersIndex: 1,
  counters: [],
  countersTotal: 0,
});

export const mutations = {
  incrementTotal(state) {
    state.countersTotal++;
  },
  decreaseTotal(state) {
    state.countersTotal--;
  },
  add(state, counter) {
    const counterWithIndex = counter.push(state.countersIndex);
    state.counters.push(counterWithIndex);
    state.countersIndex ++;
  },
  remove(state, { counter }) {
    statelcountersTotal -= counter.count;
    state.counters.splice(state.counters.indexOf(counter), 1);
  },
};
