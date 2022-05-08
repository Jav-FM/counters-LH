<template>
  <ModalsContainer>
    <span id="close-icon" class="material-icons" @click="handleHideModal">
      close
    </span>
    <div id="modal">
      <h4 id="modal-text">
        ¿Estás seguro de que quieres eliminar este contador?
      </h4>
      <div id="buttons-container">
        <Button text="Eliminar" :handleOnClick="handleDeleteCounter" />
        <Button text="Cancelar" :handleOnClick="handleHideModal" />
      </div>
    </div>
  </ModalsContainer>
</template>

<script>
export default {
  name: "DeletingCounterModal",
  data() {
    return {
      counterName: "",
      alertContent: "",
      createButtonDisabled: true,
    };
  },
  computed: {
    counters() {
      return this.$store.state.counters.counters;
    },
  },
  methods: {
    refreshData() {
      this.counterName = "";
      this.alertContent = "";
      this.createButtonDisabled = true;
    },
    handleHideModal() {
      this.$store.commit("counters/setCounterInFocus", null);
      this.refreshData();
      this.$store.commit("modals/hideDeletingCounterModal");
    },
    handleDeleteCounter() {
      if (this.counters.length === 1) {
        this.$store.commit("countersFilters/cleanFilters");
      }
      this.$store.commit("counters/delete", this.id);
      this.handleHideModal();
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
  width: 60%;
  min-height: 200px;
  background-color: #593977;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#modal-text {
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
}
#buttons-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
