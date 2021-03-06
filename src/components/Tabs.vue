<template>
  <div :class="$style.tabs">
    <div
      :class="{
        [$style.tab_container]: true,
        [$style.active]: tab.id === activeId,
      }"
      v-for="tab in tabs"
      :key="tab.id"
    >
      <div :class="$style.tab">
        <div v-if="tab.notifications" :class="$style.notifications">
          {{ tab.notifications > 9 ? '9+' : tab.notifications }}
        </div>
        <IconButton
          :icon="{ prefix: 'fas', iconName: tab.icon }"
          :iconStyle="{
            width: '28px',
            height: '28px',
            color: tab.id === activeId ? '#2e77f2' : '#999999',
          }"
          :tip="tab.tip"
          @click="activeId = tab.id"
        ></IconButton>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from './IconButton.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Tabs',
  components: {
    IconButton,
  },
  data() {
    return {
      activeId: 0,
      tabs: [
        {
          id: 0,
          iconPrefix: 'fas',
          icon: 'home',
          tip: 'Home',
          notifications: 0,
        },
        {
          id: 1,
          iconPrefix: 'far',
          icon: 'flag',
          tip: 'Pages',
          notifications: 0,
        },
        {
          id: 2,
          iconPrefix: 'far',
          icon: 'play-circle',
          tip: 'Watch',
          notifications: 0,
        },
        {
          id: 3,
          iconPrefix: 'fas',
          icon: 'store-alt',
          tip: 'Marketplace',
          notifications: 0,
        },
        {
          id: 4,
          iconPrefix: 'fas',
          icon: 'gamepad',
          tip: 'Gaming',
          notifications: 0,
        },
      ],
    };
  },
  computed: mapGetters({
    notifications: 'notifications',
  }),
  mounted() {
    this.$store.dispatch('fetchNotifications');
  },
  watch: {
    notifications(newNotifications) {
      this.tabs.forEach(tab => {
        tab.notifications = newNotifications.notifications.find(i => i.id === tab.id).num;
      });
    },
  },
};
</script>

<style module lang="scss">
.tabs {
  display: flex;
  align-items: center;
}

.tab_container {
  height: calc(100% - 3px);
  border-bottom: 3px solid #ffffff;
  display: flex;
  align-items: center;
}

.active {
  border-bottom: 3px solid #2e77f2;
}

.tab {
  width: 136px;
  height: 53px;
  border-radius: 12px;
  position: relative;

  &:hover {
    background-color: #e4e6eb;
  }
}

.notifications {
  position: absolute;
  top: 15%;
  left: 56%;
  font-size: 13px;
  height: 19px;
  width: 19px;
  z-index: 10;
  background-color: #f02849;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 2px 4px;
}
</style>
