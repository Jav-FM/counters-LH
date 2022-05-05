
<template>
  <div id="counter">
    <h3>{{ name }}</h3>
    <div id="counter-right-side">
      <RoundButton :iconColor="'#1db118'" :icon="'add'" />
      <p>{{ value }}</p>
        <RoundButton :iconColor="'#af0a2e'" :icon="'remove'" />
      <span class="material-icons">delete</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
#counter {
  width: 90%;
  background-color: #503977;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
}
#counter-right-side {
    display: flex;
    align-items: center;
}
</style>
