<template>
  <div :class="$style.line"></div>
</template>

<script>
export default {
  name: 'Line',
};
</script>

<style module>
.line {
  width: 100%;
  height: 1px;
  background-color: #e3e6ea;
  margin: 12px 0;
}
</style>
