<template >
  <div id="index">
    <CreatingCounterModal v-show="creatingCounterModalState" />
    <DeletingCounterModal v-show="deletingCounterModalState" />
    <NavBar />
    <CountersContainer>
      <Counter
        v-for="(c, index) in counters"
        :key="index"
        :name="c.name"
        :value="c.value"
        :id="c.id"
      />
      <h4 v-show="counters.length === 0">No tienes contadores registrados.</h4>
    </CountersContainer>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
  },
};
</script>

<style>
body {
  background-color: #120b16;
  color: #f6f5f8;
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100vw;
  margin: 0px;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}

h2 {
  font-size: 32px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  font-weight: 600;
}

h4 {
  font-size: 16px;
  font-weight: 600;
}

p {
  font-size: 14px;
  color: #120b16;
}

#index {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
