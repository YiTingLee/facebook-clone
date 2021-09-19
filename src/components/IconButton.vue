<template>
  <div
    :class="$style.container"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <font-awesome-icon :style="iconStyle" :icon="icon" />
    <div :class="$style.label" v-if="label">{{ label }}</div>
    <div :class="$style.tip" v-if="tip && isHover">{{ tip }}</div>
  </div>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    icon: {
      type: Object,
      default: () => ({ prefix: "fas", iconName: "search" })
    },
    iconStyle: {
      type: Object,
      default: () => ({ width: "20px", height: "20px", color: "#000000" })
    },
    label: {
      type: String,
      default: null
    },
    tip: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isHover: false
    };
  }
};
</script>

<style module>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
}

.label {
  font-size: 15px;
}

.tip {
  background-color: #333;
  color: #eee;
  position: absolute;
  padding: 6px 12px;
  border-radius: 6px;
  top: 60px;
  opacity: 0;
  animation: opacity 0.3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  font-size: 14px;
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
