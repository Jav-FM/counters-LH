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
      <div v-show="counters.length === 0">
        <h4 v-if="filtersApplied">
          Ningun contador cumple con los criterios de filtro.
        </h4>
        <div v-else>
          <h4>No tienes contadores registrados.</h4>
          <Button
            :text="'Crea tu primer contador'"
            :handleOnClick="handleShowModal"
          />
        </div>
      </div>
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
      if (this.$store.state.countersFilters.filteredCounters) {
        return this.$store.state.countersFilters.filteredCounters;
      } else if (this.$store.state.countersOrder.orderedCounters) {
        return this.$store.state.countersOrder.orderedCounters;
      } else {
        return this.$store.state.counters.counters;
      }
    },
    filtersApplied() {
      return this.$store.state.countersFilters.filtersActive;
    },
  },
  mounted() {
    localStorage.clear();
    sessionStorage.clear();
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
