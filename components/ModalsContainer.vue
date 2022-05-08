<template>
  <transition name="modals-transition" appear>
    <div id="total-container">
      <div id="transparent-background"></div>
      <div id="modal-container">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CreatingCounterModal",
};
</script>

<style scoped>
#total-container {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
#transparent-background {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0f0a16;
  opacity: 0.75;
}
#modal-container {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
}
.modals-transition-enter-active,
.modals-transition-leave-active {
  transition: opacity 0.3s;
}
.modals-transition-enter,
.modals-transition-leave-to {
  opacity: 0;
}
</style>
