<template>
  <div id="filters-container">
    <div id="filters-fields">
      <div id="filters-section" v-show="filtersApplied !== true">
        <h4 id="filter-type-text">Filtro numérico:</h4>
        <div id="numeric-filter-inputs">
        <Selector
          name="selectionCriteria"
          v-model="criteria"
          :options="criteriaOptions"
          placeholder="criterio"
        />
        <input
          type="number"
          id="number-input"
          placeholder="N°"
          v-model="number"
          min="0"
          max="20"
        />
        </div>
      </div>
      <div id="filters-section" v-show="filtersApplied !== true">
        <h4 id="filter-type-text">Filtro por nombre:</h4>
        <input
          type="text"
          id="name-input"
          placeholder="Nombre"
          v-model="name"
        />
      </div>
    </div>

    <Button
      v-show="filtersApplied !== true"
      text="Aplicar Filtros"
      :disabled="!readyToFilter"
      :handleOnClick="applyFilters"
    />
    <div id="filters-section" v-show="filtersApplied">
      <div id="filters-fields">
        <h4>Filtro numérico aplicado: {{ criteria }} {{ number }}</h4>
        <h4>Filtro por nombre aplicado: {{ name }}</h4>
      </div>
      <Button text="Cancelar Filtros" :handleOnClick="cancelFilters" />
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
      name: null,
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
      if (
        (this.criteria && this.number) ||
        (!this.criteria && !this.number && this.name) ||
        (this.criteria && this.number && this.name)
      ) {
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
    applyFilters() {
      if (this.readyToFilter) {
        let filteredCounters = this.counters;
        let appliedFilters = {};
        if (this.criteria && this.number) {
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
          filteredCounters = filteredCounters.filter((c) =>
            applyCondition(c.value, this.number)
          );
          appliedFilters.criteria = this.criteria;
          appliedFilters.number = this.number;
        }
        if (this.name) {
          filteredCounters = filteredCounters.filter((c) =>
            c.name.toLowerCase().includes(this.name.toLowerCase())
          );
          appliedFilters.name = this.name;
        }
        this.$store.commit("countersFilters/setNumericFilter", [
          filteredCounters,
          appliedFilters,
        ]);
      }
    },
    cancelFilters() {
      this.$store.commit("countersFilters/cleanFilters");
    },
  },
  watch: {
    counters() {
      if (this.filtersApplied) this.applyFilters();
    },
  },
};
</script>

<style scoped>
#filters-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#filters-section {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#filters-fields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
}
#numeric-filter-inputs {
    display: flex;
  align-items: center;
}
#number-input {
  height: 38px;
  width: 40px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  padding-left: 15px;
}
#name-input {
  height: 38px;
  width: 130px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  padding-left: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
}
@media (max-width: 894px) {
  #filters-container {
    margin: auto;
  }
  #filter-type-text,
  #filters-section {
    margin: 0;
  }
  #filter-type-text {
    width: 100%;
    text-align: center;
    margin: 10px
  }
}
</style>
