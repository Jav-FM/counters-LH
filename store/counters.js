export const state = () => ({
  countersId: 1,
  counters: [],
  countersTotal: 0,
  counterInFocusId: null,
});

export const mutations = {
  incrementTotal(state) {
    state.countersTotal++;
  },
  decreaseTotal(state) {
    state.countersTotal--;
  },
  add(state, counterName) {
    const counter = {
      id: state.countersId,
      name: counterName,
      value: 0,
    };
    state.counters.push(counter);
    state.countersId++;
  },
  setCounterInFocus(state, id) {
    state.counterInFocusId = id;
  },
  delete(state) {
    // state.countersTotal -= counter.count;
    const newCounters = state.counters.filter(
      (c) => c.id !== state.counterInFocusId
    );
    state.counters = newCounters;
    state.counterInFocusId = null;
  },
  incrementCounterValue(state, id) {
    const actualCounters = state.counters.map((c) => {
      if (c.id === id) {
        c.value++;
      }
      return c;
    });
    state.counters = actualCounters;
  },
  decreaseCounterValue(state, id) {
    const actualCounters = state.counters.map((c) => {
      if (c.id === id) {
        c.value--;
      }
      return c;
    });
    state.counters = actualCounters;
  },
};
