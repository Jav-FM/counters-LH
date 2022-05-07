<template>
  <div id="container">
    <h2>Tus contadores</h2>
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
  width: 70%;
  padding: 20px;
  padding-bottom: 40px;
  background-color: #2b262e;
  border: 1px solid #716479;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 200px;
}
</style>
