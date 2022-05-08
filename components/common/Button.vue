<template>
  <div class="button" :class="{ disabled: disabled }" @click="handleOnClick">
    <h5 id="button-text">{{ text }}</h5>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    handleOnClick: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.button {
  width: 200px;
  height: 40px;
  background-color: #c09ecf;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px;
}
#button-text {
  color: #120b16;
}
.button:hover {
  cursor: pointer;
}
.disabled {
  background-color: #837896;
}
.disabled:hover {
  cursor: not-allowed;
}
</style>
