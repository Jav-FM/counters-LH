
<template>
  <div id="order-container">
    <div id="order-container-side">
      <h4>Nombre</h4>
      <div id="arrows-container">
        <span
          class="material-icons up-icon"
          @click="!nameUpwardActive ? handleSetOrder('name', 'upward') : null"
          :class="{ icondisabled: nameUpwardActive }"
        >
          arrow_drop_up
        </span>
        <span
          class="material-icons down-icon"
          @click="!nameFallingActive ? handleSetOrder('name', 'falling') : null"
          :class="{ icondisabled: nameFallingActive }"
        >
          arrow_drop_down
        </span>
      </div>
    </div>
    <div id="order-container-side">
      <h4>Valor</h4>
      <div id="arrows-container">
        <span
          class="material-icons up-icon"
          @click="!valueUpwardActive ? handleSetOrder('value', 'upward') : null"
          :class="{ icondisabled: valueUpwardActive }"
        >
          arrow_drop_up
        </span>
        <span
          class="material-icons down-icon"
          @click="
            !valueFallingActive ? handleSetOrder('value', 'falling') : null
          "
          :class="{ icondisabled: valueFallingActive }"
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
  data() {
    return {};
  },
  methods: {
    handleSetOrder(field, direction) {
      this.$store.commit("countersOrder/setField", field);
      this.$store.commit("countersOrder/setDirection", direction);
    },
  },
  computed: {
    counters() {
      return this.$store.state.counters.counters;
    },
    countersOrder() {
      if (this.$store.state.countersOrder.active) {
        return {
          field: this.$store.state.countersOrder.field,
          direction: this.$store.state.countersOrder.direction,
        };
      } else {
        return false;
      }
    },
    nameUpwardActive() {
      if (
        this.countersOrder?.field === "name" &&
        this.countersOrder?.direction === "upward"
      ) {
        const orderedCounters = [...this.counters].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        this.$store.commit("countersOrder/setOrderedCounters", orderedCounters);
        return true;
      } else {
        return false;
      }
    },
    nameFallingActive() {
      if (
        this.countersOrder?.field === "name" &&
        this.countersOrder?.direction === "falling"
      ) {
        const orderedCounters = [...this.counters].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        this.$store.commit("countersOrder/setOrderedCounters", orderedCounters);
        return true;
      } else {
        return false;
      }
    },
    valueUpwardActive() {
      if (
        this.countersOrder?.field === "value" &&
        this.countersOrder?.direction === "upward"
      ) {
        const orderedCounters = [...this.counters].sort((a, b) =>
          a.value > b.value ? 1 : -1
        );
        this.$store.commit("countersOrder/setOrderedCounters", orderedCounters);
        return true;
      } else {
        return false;
      }
    },
    valueFallingActive() {
      if (
        this.countersOrder?.field === "value" &&
        this.countersOrder?.direction === "falling"
      ) {
        const orderedCounters = [...this.counters].sort((a, b) =>
          b.value > a.value ? 1 : -1
        );
        this.$store.commit("countersOrder/setOrderedCounters", orderedCounters);
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
#order-container {
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 4%;
  gap: 10px;
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
.icondisabled {
  color: grey;
}
.icondisabled:hover {
  cursor: default;
}
@media (max-width: 870px) {
  #order-container {
    justify-content: space-evenly;
  }
}
</style>
