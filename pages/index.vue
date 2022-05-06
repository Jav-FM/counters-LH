<template >
  <div id="index">
    <Modal v-show="modalState" />
    <NavBar />
    <CountersContainer>
      <Counter :name="'Nombre'" :value="2" />
      <Counter :name="'Nombre'" :value="2" />
      <Counter :name="'Nombre'" :value="2" />
      <Counter :name="'Nombre'" :value="2" />
      <Counter :name="'Nombre'" :value="2" />
    </CountersContainer>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
    computed: {
    modalState () {
      return this.$store.state.modal.showingModal
    }
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
