<template>
  <div id="header">
    <div id="header-side">
    <Button
      v-show="counters.length > 0"
      :text="'Agregar contador'"
      :handleOnClick="handleShowModal"
      :disabled="disableCreateButton"
    />
    <ErrorAlert v-show="disableCreateButton"
      >Llegaste al límite de contadores
    </ErrorAlert>
    </div>
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
  height: 100px;
  background-color: #39167a;
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
#header-side {
    display: flex;
  align-items: center;
}
</style>
