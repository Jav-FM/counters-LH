
<template>
  <div id="order-container">
    <div id="order-container-side">
      <h3>Nombre</h3>
      <div id="arrows-container">
        <span
          class="material-icons up-icon"
          @click="handleSetOrder('name', 'upward')"
        >
          arrow_drop_up
        </span>
        <span
          class="material-icons down-icon"
          @click="handleSetOrder('name', 'falling')"
        >
          arrow_drop_down
        </span>
      </div>
    </div>
    <div id="order-container-side">
      <h3>Valor</h3>
      <div id="arrows-container">
        <span
          class="material-icons up-icon"
          @click="handleSetOrder('value', 'upward')"
        >
          arrow_drop_up
        </span>
        <span
          class="material-icons down-icon"
          @click="handleSetOrder('value', 'falling')"
        >
          arrow_drop_down
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderByButtons",
  methods: {
    handleSetOrder(field, direction) {
      this.$store.commit("countersOrder/setField", field);
      this.$store.commit("countersOrder/setDirection", direction);
    }
  }
};
</script>

<style scoped>
#order-container {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 4%;
}
#order-container-side {
  display: flex;
  align-items: center;
}
#arrows-container {
  margin-left: 10px;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.up-icon {
  margin-bottom: -8px;
}
.up-icon:hover,
.down-icon:hover {
  cursor: pointer;
}
</style>
