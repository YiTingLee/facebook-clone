<template>
  <div :class="$style.header">
    <div :class="$style.header_left">
      <IconButton
        :icon="{ prefix: 'fab', iconName: 'facebook' }"
        :iconStyle="{
          width: '40px',
          height: '40px',
          color: '#ff1694',
          borderRadius: '15px'
        }"
      ></IconButton>
      <div>
        <SearchBar />
      </div>
    </div>
    <div></div>
    <div :class="$style.header_right">
      <IconButton
        :class="$style.user_button"
        :iconStyle="{
          width: '28px',
          height: '28px',
          backgroundColor: '#000000',
          borderRadius: '15px'
        }"
        :image="require('../assets/logo.png')"
        label="Eric"
      ></IconButton>
      <IconButton
        :class="$style.icon_button"
        :icon="{ prefix: 'fas', iconName: 'bars' }"
        tip="Menu"
      ></IconButton>
      <IconButton
        :class="$style.icon_button"
        :icon="{ prefix: 'fas', iconName: 'comment' }"
        tip="Messenger"
      ></IconButton>
      <IconButton
        :class="$style.icon_button"
        :icon="{ prefix: 'fas', iconName: 'bell' }"
        tip="Notifications"
      ></IconButton>
      <IconButton
        :class="$style.icon_button"
        :icon="{ prefix: 'fas', iconName: 'sort-down' }"
        tip="Account"
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
  gap: 6px;
}

.header_right {
  display: flex;
  align-items: center;
  gap: 8px;
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

.user_button {
  width: auto;
  height: 32px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  padding: 0 12px;
}

.user_button:hover {
  background-color: #e4e6eb;
}
</style>
