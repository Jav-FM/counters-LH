<template>
  <ModalsContainer>
      <span
        id="close-icon"
        class="material-icons"
        @click="handleHideModal"
      >
        close
      </span>
    <div id="modal">
      <div id="modal-side">
        <h4>Nombre:</h4>
        <input id="modal-input" v-model="counterName" />
        <ErrorAlert v-show="alertContent">{{ alertContent }}
        </ErrorAlert>
      </div>
      <div id="modal-side">
        <Button
          text="Agregar"
          :disabled="createButtonDisabled"
          :handleOnClick="handleAddCounter"
        />
        <Button text="Cancelar" :handleOnClick="handleHideModal" />
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
      alertContent: "Debes escribir un nombre",
      createButtonDisabled: true,
      nameValidator: /^([A-ZÑa-zñáéíóúÁÉÍÓÚ 0-9]){2,20}$/,
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
        : value !== "" && value.trim() && !this.nameValidator.test(value)
        ? (this.alertContent = "Usa sólo letras y números, entre 2 y 20 caracteres")
        : value !== "" && value.trim() && this.nameValidator.test(value)
        ? (this.createButtonDisabled = false)
        : (this.alertContent = "Debes escribir un nombre");
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
  font-size: 16px;
}
#close-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 32px;
}
#close-icon:hover {
  cursor: pointer;
}
</style>
