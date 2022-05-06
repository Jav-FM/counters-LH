<template>
  <div
    class="round-button-container"
    :class="{ disabled: disabled }"
    @click="handleOnClick"
  >
    <span :style="iconStyle" class="material-icons">{{ icon }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconColor: {
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
  data() {
    return {
      iconStyle: {
        color: this.iconColor,
        margin: 0,
      },
    };
  },
  methods: {
    handlePress(event) {
      this.$emit("handlePressButton", "Me clickearon!");
    },
  },
};
</script>

<style scoped>
.round-button-container {
  background-color: #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
}
.round-button-container:hover {
  cursor: pointer;
}
.disabled {
  background-color: #b1afb4;
}
.disabled:hover {
  cursor: not-allowed;
}
</style>
