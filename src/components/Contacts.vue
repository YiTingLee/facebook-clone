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
    <div :class="$style.friends_container">
      <div :class="$style.row" v-for="friend in friends" :key="friend.id">
        <IconButton
          :class="$style.friend"
          :iconStyle="{
            width: '32px',
            height: '32px',
            borderRadius: '20px',
          }"
          :image="friend.image"
          :label="friend.label"
          :isOnline="true"
        ></IconButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconButton from './IconButton.vue';

export default {
  name: 'Contacts',
  components: {
    IconButton,
  },
  computed: {
    ...mapGetters({ friends: 'friends' }),
  },
  mounted() {
    this.$store.dispatch('fetchFriends');
  },
};
</script>

<style module lang="scss">
.contacts_container {
  padding: 12px 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contacts_header_container {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
}

.contacts_header {
  flex: 1;
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
  &:hover {
    background-color: #d4d6db;
  }
}

.friends_container {
  flex: 1;
}

.row {
  width: 100%;
  height: 52px;
}

.friend {
  padding: 6px;
  display: flex;
  justify-content: flex-start;
  border-radius: 6px;

  &:hover {
    background-color: #e4e6eb;
  }
}
</style>
