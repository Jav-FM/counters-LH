export const state = () => ({
  showingModal: false,
});

export const mutations = {
  showModal(state) {
    state.showingModal = true;
  },
  hideModal(state) {
    state.showingModal = false;
  },
};
