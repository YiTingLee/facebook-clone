<template>
  <div :class="$style.left_bar">
    <div :class="$style.row" v-for="page in pages" :key="page.id">
      <IconButton
        :class="$style.page"
        :icon="page.icon ? { prefix: 'fas', iconName: page.icon } : undefined"
        :iconStyle="{
          width: '32px',
          height: '32px',
          borderRadius: '20px'
        }"
        :image="page.image"
        :label="page.label"
      ></IconButton>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import IconButton from "./IconButton.vue";
export default {
  name: "LeftBar",
  components: { IconButton },
  computed: {
    ...mapGetters({ user: "user" }),
    pages() {
      console.log("user:", this.user);
      return [
        {
          id: 0,
          icon: null,
          image: this.user.image,
          label: this.user.userName
        },
        {
          id: 1,
          icon: 'user-friends',
          image: null,
          label: 'Friends'
        },
        {
          id: 2,
          icon: 'star',
          image: null,
          label: 'Favorites'
        },
        {
          id: 3,
          icon: 'clinic-medical',
          image: null,
          label: 'COVID-19 Information Center'
        },
        {
          id: 4,
          icon: 'users',
          image: null,
          label: 'Groups'
        },
        {
          id: 5,
          icon: 'store-alt',
          image: null,
          label: 'Marketplace'
        },
        {
          id: 6,
          icon: 'video',
          image: null,
          label: 'Ad Center'
        },
        {
          id: 7,
          icon: 'poll',
          image: null,
          label: 'Ads Manager'
        },
        {
          id: 8,
          icon: 'tint',
          image: null,
          label: 'Blood Donations'
        },
        {
          id: 9,
          icon: 'school',
          image: null,
          label: 'Campus'
        },
        {
          id: 10,
          icon: 'calendar-alt',
          image: null,
          label: 'Events'
        },
        {
          id: 11,
          icon: 'suitcase',
          image: null,
          label: 'Jobs'
        },
        {
          id: 12,
          icon: 'comment',
          image: null,
          label: 'Messenger'
        },
        {
          id: 13,
          icon: 'flag',
          image: null,
          label: 'Pages'
        },
        {
          id: 14,
          icon: 'gamepad',
          image: null,
          label: 'Play Games'
        },
        {
          id: 15,
          icon: 'play-circle',
          image: null,
          label: 'Watch'
        },
        {
          id: 16,
          icon: 'cloud',
          image: null,
          label: 'Weather'
        },
        {
          id: 17,
          icon: 'camera-retro',
          image: null,
          label: 'Most Recent'
        },
        {
          id: 18,
          icon: 'tags',
          image: null,
          label: 'Saved'
        }
      ];
    }
  }
};
</script>

<style module>
.left_bar {
  min-width: 280px;
  width: 360px;
  height: calc(100% - 16px); /* minus padding */
  padding: 8px;
  overflow-y: scroll;
}

.row {
  width: 100%;
  height: 52px;
}

.page {
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  padding: 0 8px;
  border-radius: 5px;
}

.page:hover {
  background-color: #e4e6eb;
}
</style>
