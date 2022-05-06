export const state = () => ({
  showingCreatingCounterModal: false,
  showingDeletingCounterModal: false,
});

export const mutations = {
  showCreatingCounterModal(state) {
    state.showingCreatingCounterModal = true;
  },
  hideCreatingCounterModal(state) {
    state.showingCreatingCounterModal = false;
  },
  showDeletingCounterModal(state) {
    state.showingDeletingCounterModal = true;
  },
  hideDeletingCounterModal(state) {
    state.showingDeletingCounterModal = false;
  },
};
