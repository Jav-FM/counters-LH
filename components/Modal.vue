<template>
  <div id="modal">
    <h4>AQUI ESTOY</h4>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
#modal {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: #39167a;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
