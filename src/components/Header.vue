<template>
  <div :class="$style.header">
    <div :class="$style.header_left">
      <div>
        <font-awesome-icon
          style="width: 40px; height: 40px; color: #0271E5"
          :icon="{ prefix: 'fab', iconName: 'facebook' }"
        />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "Header",
  components: {
    SearchBar
  }
};
</script>

<style module>
.header {
  height: 56px;
  background-color: #ffffff;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
}

.header_left {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
