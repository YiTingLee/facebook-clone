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
    <div :class="$style.header_right">
      <IconButton
        :class="$style.icon_button"
        :icon="{ prefix: 'fas', iconName: 'bars' }"
        tip="menu"
      ></IconButton>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import IconButton from "./IconButton.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
    IconButton
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

.header_right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon_button {
  width: 40px;
  height: 40px;
  background-color: #e4e6eb;
  border-radius: 20px;
}

.icon_button:hover {
  background-color: #d4d6db;
}
</style>
