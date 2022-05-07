<template>
<div>
  <div id="counters-numeric-filters" v-show="filtersApplied !== true">
    <h3>Filtro numérico:</h3>
    <Selector
      :name="'selectionCriteria'"
      v-model="criteria"
      :options="criteriaOptions"
      :placeholder="'criterio'"
    />
    <input type="number" id="number-input" placeholder="N°" v-model="number" />
    <Button
      text="Aplicar Filtro"
      :disabled="!readyToFilter"
      :handleOnClick="applyNumericFilter"
    />
  </div>
    <div id="counters-numeric-filters" v-show="filtersApplied">
       <h3>Filtro numérico aplicado: {{criteria}} {{number}}</h3>
    <Button
      text="Cancelar Filtro"
      :handleOnClick="cancelNumericFilter"
    />
  </div>
</div>
</template>

<script>
export default {
  name: "CountersNumericFilter",
  data() {
    return {
      criteriaOptions: [
        { name: "Mayor que", value: ">" },
        { name: "Mayor o igual que", value: ">=" },
        { name: "Menor que", value: "<" },
        { name: "Menor o igual que", value: "<=" },
      ],
      number: null,
      criteria: null,
    };
  },
  computed: {
    counters() {
      if (this.$store.state.countersOrder.orderedCounters) {
        return this.$store.state.countersOrder.orderedCounters;
      } else {
        return this.$store.state.counters.counters;
      }
    },
    readyToFilter() {
      if (this.criteria && this.number) {
        return true;
      } else {
        return false;
      }
    },
    filtersApplied() {
      return this.$store.state.countersFilters.filtersActive;
    },
  },
  methods: {
    applyNumericFilter () {
      const applyCondition = (numberOne, numberTwo) => {
        return this.criteria === ">"
          ? numberOne > numberTwo
          : this.criteria === ">="
          ? numberOne >= numberTwo
          : this.criteria === "<"
          ? numberOne < numberTwo
          : this.criteria === "<="
          ? numberOne <= numberTwo
          : null;
      };
      const filteredCounters = [...this.counters].filter((c) =>
        applyCondition(c.value, this.number)
      );
       this.$store.commit("countersFilters/setNumericFilter", filteredCounters);
    },
    cancelNumericFilter () {
    this.$store.commit("countersFilters/cleanFilters");
    }
  },
};
</script>

<style scoped>
#counters-numeric-filters {
  margin-right: 20px;
  display: flex;
  align-items: center;
}
#number-input {
  height: 38px;
  width: 50px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
}
</style>
