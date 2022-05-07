<template >
  <div id="index-container">
    <CreatingCounterModal v-show="creatingCounterModalState" />
    <DeletingCounterModal v-show="deletingCounterModalState" />
    <CountersContainer>
      <OrderByButtons v-show="counters.length !== 0" />
      <Counter
        v-for="(c, index) in counters"
        :key="index"
        :name="c.name"
        :value="c.value"
        :id="c.id"
      />
      <h4 v-show="counters.length === 0">No tienes contadores registrados.</h4>
      <Button
        v-show="counters.length === 0"
        :text="'Crea tu primer contador'"
        :handleOnClick="handleShowModal"
      />
    </CountersContainer>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "generalLayout",
  methods: {
    handleShowModal() {
      this.$store.commit("modals/showCreatingCounterModal");
    },
  },
  computed: {
    creatingCounterModalState() {
      return this.$store.state.modals.showingCreatingCounterModal;
    },
    deletingCounterModalState() {
      return this.$store.state.modals.showingDeletingCounterModal;
    },
    counters() {
      if (this.$store.state.countersOrder.orderedCounters) {
        return this.$store.state.countersOrder.orderedCounters;
      } else {
        return this.$store.state.counters.counters;
      }
    },
  },
  mounted() {
    localStorage.clear();
  },
};
</script>

<style scoped>
#index-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
