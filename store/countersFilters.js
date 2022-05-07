export const state = () => ({
  filtersActive: false,
  filteredCounters: [],
});

export const mutations = {
  setNumericFilter(state, filteredCounters) {
    state.filteredCounters = filteredCounters;
    state.filtersActive = true;
  },
  cleanFilters(state) {
    state.filteredCounters = [];
    state.filtersActive = false;
  },
};
