<template>
  <div :class="$style.header">
    <div :class="$style.header_left">
      <IconButton
        :class="$style.logo"
        :icon="{ prefix: 'fab', iconName: 'facebook' }"
        :iconStyle="{
          width: '40px',
          height: '40px',
          color: '#ff1694',
          borderRadius: '15px',
        }"
      ></IconButton>
      <div>
        <SearchBar />
      </div>
    </div>
    <div>
      <Tabs></Tabs>
    </div>
    <div :class="$style.header_right">
      <IconButton
        :class="$style.user_button"
        :iconStyle="{
          width: '28px',
          height: '28px',
          backgroundColor: '#000000',
          borderRadius: '15px',
        }"
        :image="user.image"
        :label="user.userName"
      ></IconButton>
      <IconButton :class="$style.icon_button" :icon="{ prefix: 'fas', iconName: 'bars' }" tip="Menu"></IconButton>
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
import SearchBar from './SearchBar.vue';
import IconButton from './IconButton.vue';
import Tabs from './Tabs.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    SearchBar,
    IconButton,
    Tabs,
  },
  computed: mapGetters({ user: 'user' }),
};
</script>

<style module lang="scss">
.header {
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
}

.header_left {
  min-width: 280px;
  width: 360px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.header_right {
  min-width: 280px;
  width: 360px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.logo {
  width: auto;
}

.icon_button {
  width: 40px;
  height: 40px;
  background-color: #e4e6eb;
  border-radius: 20px;

  &:hover {
    background-color: #d4d6db;
  }
}

.user_button {
  width: auto;
  height: 32px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  padding: 0 12px;

  &:hover {
    background-color: #e4e6eb;
  }
}
</style>
