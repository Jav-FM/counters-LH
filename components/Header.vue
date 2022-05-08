<template>
  <div id="header">
    <div id="header-side">
      <Button
        v-show="counters.length > 0"
        text="Agregar contador"
        :handleOnClick="handleShowModal"
        :disabled="disableCreateButton"
      />
      <ErrorAlert v-show="disableCreateButton"
        >Llegaste al límite de contadores
      </ErrorAlert>
    </div>
    <CountersFilters v-show="counters.length > 0" />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      disableCreateButton: false,
    };
  },
  methods: {
    handleShowModal() {
      if (!this.disableCreateButton) {
        this.$store.commit("modals/showCreatingCounterModal");
      }
    },
  },
  computed: {
    counters() {
      return this.$store.state.counters.counters;
    },
  },
  watch: {
    counters(value) {
      value.length === 20
        ? (this.disableCreateButton = true)
        : (this.disableCreateButton = false);
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  min-height: 100px;
  background-image: url("../assets/img/texture.jpg");
  background-position-y: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -10px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #716479;
  flex-wrap: wrap;
}
#header-side {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 894px) {
  #header-side {
    margin: auto;
    padding-bottom: 10px;
  }
}
</style>
