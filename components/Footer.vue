<template>
  <div id="footer">
     <h3 v-show="counters.length > 0">Total de contadores: {{counters.length}}</h3>
    <h3 v-show="counters.length > 0">Suma total de valores: {{countersTotalValue}}</h3>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
      counters() {
      return this.$store.state.counters.counters;
    },
    countersTotalValue() {
      return this.$store.state.counters.countersTotalValue;
    },
  },

};
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 120px;
  background-image: url("../assets/img/texture.jpg");
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid #716479;
}
</style>
