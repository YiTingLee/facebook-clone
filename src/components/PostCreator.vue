<template>
  <Card>
    <div :class="$style.head">
      <IconButton
        :class="$style.user_icon"
        :iconStyle="{
          width: '40px',
          height: '40px',
          borderRadius: '20px',
        }"
        :image="user.image"
      ></IconButton>
      <div :class="$style.text">What's on your mind, {{ user.userName }}?</div>
    </div>
    <Line></Line>
    <div :class="$style.butotn_box">
      <IconButton
        :class="$style.button"
        :iconStyle="{
          width: '24px',
          height: '24px',
          color: '#45BD62',
        }"
        :icon="{ prefix: 'fas', iconName: 'images' }"
      >
        <template v-slot:label>
          <span :class="$style.button_label">Photo/Video</span>
        </template>
      </IconButton>
      <IconButton
        :class="$style.button"
        :iconStyle="{
          width: '24px',
          height: '24px',
          color: '#1877F2',
        }"
        :icon="{ prefix: 'fas', iconName: 'user-tag' }"
      >
        <template v-slot:label>
          <span :class="$style.button_label">Tag Friends</span>
        </template></IconButton
      >
      <IconButton
        :class="$style.button"
        :iconStyle="{
          width: '24px',
          height: '24px',
          color: '#F7B928',
        }"
        :icon="{ prefix: 'fas', iconName: 'smile' }"
      >
        <template v-slot:label>
          <span :class="$style.button_label">Feeling/Activity</span>
        </template></IconButton
      >
    </div>
  </Card>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue';
import IconButton from './IconButton.vue';
import Line from './Line.vue';
export default {
  name: 'PostCreator',
  components: {
    Card,
    IconButton,
    Line,
  },
  computed: mapGetters({ user: 'user' }),
};
</script>

<style module>
.head {
  display: flex;
  gap: 6px;
}

.user_icon {
  width: 40px;
  height: 40px;
}

.text {
  flex: 1;
  color: #64676b;
  background-color: #eff2f5;
  border-radius: 18px;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.button:hover,
.text:hover {
  background-color: #e4e6eb;
}

.butotn_box {
  display: flex;
}

.button {
  flex: 1;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
}

.button_label {
  color: #65676b;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
}
</style>
