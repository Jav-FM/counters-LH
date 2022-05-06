<template>
  <div id="navbar">
    <Button :text="'Agregar contador'" :handleOnClick="handleShowModal" />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    handleShowModal() {
      this.$store.commit("modals/showCreatingCounterModal");
    },
  },
};
</script>

<style scoped>
#navbar {
  width: 100%;
  height: 100px;
  background-color: #39167a;
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
