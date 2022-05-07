export const state = () => ({
  active: false,
  field: null,
  direction: null,
});

export const mutations = {
  setField(state, fieldName) {
    if (fieldName){
      state.active = true
      state.field = fieldName
    } else {
      state.active = false
      state.field = null
    }
  },
  setDirection(state, dir) {
    state.direction = dir;
  },
};
