<template>
  <ModalsContainer>
    <div id="modal">
      <div id="modal-side">
        <h4>Nombre:</h4>
        <input id="modal-input" v-model="counterName" />
        <div v-show="alertContent" id="error-alert-container">
          <span class="material-icons">error</span>
          <p id="error-alert-text">{{ alertContent }}</p>
        </div>
      </div>
      <div id="modal-side">
        <Button
          :text="'Agregar'"
          :disabled="createButtonDisabled"
          :handleOnClick="handleAddCounter"
        />
        <Button :text="'Cancelar'" :handleOnClick="handleHideModal" />
      </div>
    </div>
  </ModalsContainer>
</template>

<script>
export default {
  name: "CreatingCounterModal",
  data() {
    return {
      counterName: "",
      alertContent: "",
      createButtonDisabled: true,
    };
  },
  methods: {
    refreshData() {
      this.counterName = "";
      this.alertContent = "";
      this.createButtonDisabled = true;
    },
    handleHideModal() {
      this.refreshData();
      this.$store.commit("modals/hideCreatingCounterModal");
    },
    handleAddCounter() {
      if (!this.createButtonDisabled) {
        this.$store.commit("counters/add", this.counterName);
        this.handleHideModal();
      }
    },
  },
  watch: {
    counterName: function (value) {
      this.alertContent = "";
      this.createButtonDisabled = true;
      value !== "" && !value.trim()
        ? (this.alertContent =
            "El nombre no puede tener sólo espacios en blanco")
        : value !== "" && value.trim()
        ? (this.createButtonDisabled = false)
        : null;
    },
  },
};
</script>

<style scoped>
#modal {
  width: 80%;
  min-height: 80px;
  background-color: #503977;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
}
#modal-side {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#modal-input {
  margin-left: 10px;
  height: 25px;
  border-radius: 5px;
  border: none;
}
#error-alert-container {
  color: #f6f5f8;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 10px;
}
#error-alert-text {
  color: #f6f5f8;
}
</style>
