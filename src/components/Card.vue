<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style module>
.container {
  width: 100%;
  padding: 12px 16px 10px 16px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 1px 1px #ddd;
}
</style>
