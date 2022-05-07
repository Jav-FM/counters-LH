<template>
        <div id="error-alert-container">
          <span class="material-icons">error</span>
          <p id="error-alert-text">
             <slot />
          </p>
        </div>
</template>

<script>
export default {
  name: "ErrorAlert",
};
</script>

<style scoped>
#error-alert-container {
  color: #f6f5f8;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 10px;
}
#error-alert-text {
  color: #f6f5f8;
}
</style>
