export const state = () => ({
  loading: true,
});

export const mutations = {
  finishLoading(state) {
    state.loading = false;
  },
  activeLoading(state) {
    state.loading = true;
  },
};
