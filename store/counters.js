export const state = () => ({
  countersId: 1,
  counters: [],
  countersTotalValue: 0,
  counterInFocusId: null,
});

export const mutations = {
  add(state, counterName) {
    const counter = {
      id: state.countersId,
      name: counterName,
      value: 0,
    };
    state.counters.push(counter);
    localStorage.setItem(`counter${state.countersId}`, JSON.stringify(counter));
    state.countersId++;
  },
  setCounterInFocus(state, id) {
    state.counterInFocusId = id;
  },
  delete(state) {
    const newCounters = state.counters.filter(
      (c) => c.id !== state.counterInFocusId
    );
    const valueToSubstract = state.counters.map((c) => {
      if (c.id === state.counterInFocusId) return c.value;
    });
    state.countersTotalValue -= valueToSubstract[0];
    state.counters = newCounters;
    localStorage.removeItem(`counter${state.counterInFocusId}`);
    state.counterInFocusId = null;
  },
  incrementCounterValue(state, id) {
    let thisCounter = {};
    const actualCounters = state.counters.map((c) => {
      if (c.id === id) {
        c.value++;
        thisCounter = c;
      }
      return c;
    });
    state.counters = actualCounters;
    state.countersTotalValue++;
    localStorage.setItem(`counter${id}`, JSON.stringify(thisCounter));
  },
  decreaseCounterValue(state, id) {
    let thisCounter = {};
    const actualCounters = state.counters.map((c) => {
      if (c.id === id) {
        c.value--;
        thisCounter = c;
      }
      return c;
    });
    state.counters = actualCounters;
    state.countersTotalValue--;
    localStorage.setItem(`counter${id}`, JSON.stringify(thisCounter));
  },
};
