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
      <h3 v-show="counterOrder">{{ counterOrder }}</h3>
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
      return this.$store.state.counters.counters;
    },
    counterOrder() {
      if (this.$store.state.countersOrder.active) {
        return {
          field: this.$store.state.countersOrder.field,
          direction: this.$store.state.countersOrder.direction,
        };
      } else {
        return false;
      }
    },
    orderedCounters() {
      if (counterOrder) {
        if (
          counterOrder.field === "name" &&
          counterOrder.direction === "upward"
        ) {
        } else if (
          counterOrder.field === "name" &&
          counterOrder.direction === "falling"
        ) {
        } else if (
          counterOrder.field === "value" &&
          counterOrder.direction === "upward"
        ) {
        } else if (
          counterOrder.field === "value" &&
          counterOrder.direction === "upward"
        ) {
        } else {
        }
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
