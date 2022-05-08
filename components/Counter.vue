
<template>
  <transition name="counter-transition" appear>
    <div id="counter">
      <h3>{{ name }}</h3>
      <div id="counter-right-side">
        <RoundButton
          iconColor="#af0a2e"
          icon="remove"
          :disabled="minLimitReached"
          :handleOnClick="handleDecreaseValue"
        />

        <h3>{{ value }}</h3>
        <RoundButton
          iconColor="#1db118"
          icon="add"
          :disabled="maxLimitReached"
          :handleOnClick="handleIngrementValue"
        />
        <span
          id="delete-icon"
          class="material-icons"
          @click="handleShowDeletingModal"
        >
          delete
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      minLimitReached: false,
      maxLimitReached: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleShowDeletingModal() {
      this.$store.commit("counters/setCounterInFocus", this.id);
      this.$store.commit("modals/showDeletingCounterModal");
    },
    handleIngrementValue() {
      if (!this.maxLimitReached) {
        this.$store.commit("counters/incrementCounterValue", this.id);
      }
    },
    handleDecreaseValue() {
      if (!this.minLimitReached) {
        this.$store.commit("counters/decreaseCounterValue", this.id);
      }
    },
    sheckValue(v) {
      if (v === 0) {
        this.minLimitReached = true;
      } else if (v === 20) {
        this.maxLimitReached = true;
      } else {
        this.minLimitReached = false;
        this.maxLimitReached = false;
      }
    },
  },
  watch: {
    value: function (val) {
      this.sheckValue(val);
    },
  },
  created() {
    this.sheckValue(this.value);
  },
};
</script>

<style scoped>
#counter {
  width: 80%;
  min-height: 90px;
  background-color: #593977;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
}
#counter-right-side {
  display: flex;
  align-items: center;
}
#delete-icon {
  margin-left: 18px;
  font-size: 32px;
}
#delete-icon:hover {
  cursor: pointer;
}
@media (max-width: 870px) {
  #counter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
.counter-transition-enter-active {
  transition: all 0.4s;
}
.counter-transition-enter {
  margin-right: 60px !important;
  opacity: 0;
}
.counter-transition-leave-active {
  transition: all 0.4s;
}
.counter-transition-leave-to {
  margin-left: 60px !important;
  opacity: 0;
}
</style>
