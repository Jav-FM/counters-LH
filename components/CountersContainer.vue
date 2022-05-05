<template>
  <div id="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CountersContainer",
};
</script>

<style scoped>
#container {
  width: 80%;
  padding: 20px;
  padding-bottom: 40px;
  background-color: #2b262e;
  border: 1px solid #716479;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
