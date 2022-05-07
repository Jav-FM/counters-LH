export const state = () => ({
  active: false,
  field: null,
  direction: null,
  orderedCounters: null,
});

export const mutations = {
  setField(state, fieldName) {
    if (fieldName) {
      state.field = fieldName;
      state.active = true;
    } else {
      state.field = null;
      state.active = false;
    }
  },
  setDirection(state, dir) {
    if (dir) {
      state.direction = dir;
    } else {
      state.direction = null;
    }
  },
  setOrderedCounters(state, counters) {
    counters
      ? (state.orderedCounters = counters)
      : (state.orderedCounters = null);
  },
};
