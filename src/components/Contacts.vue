<template>
  <div :class="$style.contacts_container">
    <div :class="$style.contacts_header_container">
      <div :class="$style.contacts_header">Contacts</div>
      <div :class="$style.header_icon_container">
        <IconButton
          :class="$style.icon_button"
          :iconStyle="{ width: '16px', height: '16px' }"
          :icon="{ prefix: 'fas', iconName: 'video' }"
          tip="New Room"
        ></IconButton>
        <IconButton
          :class="$style.icon_button"
          :iconStyle="{ width: '16px', height: '16px' }"
          :icon="{ prefix: 'fas', iconName: 'search' }"
          tip="Search by name or group"
        ></IconButton>
        <IconButton
          :class="$style.icon_button"
          :iconStyle="{ width: '16px', height: '16px' }"
          :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }"
          tip="Options"
        ></IconButton>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "./IconButton.vue";

export default {
  name: "Contacts",
  components: {
    IconButton
  }
};
</script>

<style module>
.contacts_container {
  padding: 12px 8px;
}

.contacts_header_container {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
}

.contacts_header {
  flex: 1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #65676b;
}

.header_icon_container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon_button {
  width: 32px;
  height: 32px;
  border-radius: 20px;
}

.icon_button:hover {
  background-color: #d4d6db;
}
</style>
