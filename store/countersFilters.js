export const state = () => ({
  filtersActive: false,
  filteredCounters: null,
  numberOfAppliedFilters: 0,
  appliedFilters: [],
});

export const mutations = {
  setNumericFilter(state, [filteredCounters, appliedFilter]) {
    state.filteredCounters = filteredCounters;
    state.filtersActive = true;
    state.numberOfAppliedFilters++;
    sessionStorage.setItem(
      `filter${state.numberOfAppliedFilters}`,
      JSON.stringify(appliedFilter)
    );
    state.appliedFilters.push(appliedFilter);
  },
  cleanFilters(state) {
    state.filteredCounters = null;
    state.filtersActive = false;
  },
};
