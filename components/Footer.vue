<template>
  <div id="footer">
    <h3 v-show="counters.length > 0">Cuenta total: {{countersTotalValue}}</h3>
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
  height: 120px;
  background-color: #39167a;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
