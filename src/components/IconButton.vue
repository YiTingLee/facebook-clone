<template>
  <div
    :class="$style.container"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div :class="$style.image_container">
      <font-awesome-icon v-if="!image" :style="iconStyle" :icon="icon" />
      <img v-else :src="image" :style="iconStyle" />
      <div v-if="isOnline" :class="$style.online"></div>
    </div>
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
    },
    image: {
      type: String,
      default: null
    },
    isOnline: {
      type: Boolean,
      default: false
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
  gap: 6px;
  position: relative;
}

.image_container {
  position: relative;
}

.label {
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  white-space: nowrap;
  z-index: 10;
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.online {
  width: 12px;
  height: 12px;
  position: absolute;
  background: #31a24c;
  border-radius: 15px;
  border: 2px solid #f0f2f5;
  bottom: 0px;
  right: 0px;
}
</style>
