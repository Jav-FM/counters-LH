<template>
  <div id="button-container">
    <h4 id="button-text" @click="onPress">{{ text }}</h4>
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
    onPress: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
  #button-container {
    width: 200px;
    height: 40px;
    background-color: #b09ecf;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 20px;
  }
  #button-text {
    color: #120b16;
  }
  #button-container:hover {
    cursor: pointer;
  }
</style>
