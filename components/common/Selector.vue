<template>
  <div
    class="selector-container"
    :class="{ disabled: disabled }"
  >
    <select :name="name" id="selector" @change="$emit('change', $event.target.value)">
      <option id="default-value" key="0" :value="null" selected>
        {{ placeholder }}
      </option>
      <option v-for="(o) in options" :key="o.value" :value="o.value">
        {{ o.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Selector",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.selector-container {
  width: 150px;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px;
}
#selector {
  width: 130px;
  padding: 10px;
  background: #ffffff;
  border: none;
  color: #120b16;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.selector:hover {
  cursor: pointer;
}

.disabled {
  background-color: #837896;
}
.disabled:hover {
  cursor: not-allowed;
}
#default-value {
  color: #7e7a83;
}
</style>
