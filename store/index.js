const state = () => ({
  loading: true,
});

const mutations = {
  finishLoading(state) {
    state.loading = false;
  },
  activeLoading(state) {
    state.loading = true;
  },
};

export { state, mutations };
