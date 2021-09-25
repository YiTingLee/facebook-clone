<template>
  <div :class="$style.container">
    <img :src="image" />
    <div v-if="hasAddFunction" :class="$style.footer">
      <IconButton
        :class="$style.add_icon"
        :icon="{ prefix: 'fas', iconName: 'plus' }"
        :iconStyle="{ width: '18px', height: '18px', color: '#ffffff' }"
      ></IconButton>
      <span :class="$style.footer_title">Create Story</span>
    </div>
    <img v-if="userIcon" :class="$style.user_icon" :src="userIcon" />
    <span v-if="userName" :class="$style.user_name">
      {{ userName }}
    </span>
  </div>
</template>

<script>
import IconButton from './IconButton.vue';
export default {
  name: 'Story',
  components: { IconButton },
  props: {
    image: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: '',
    },
    userIcon: {
      type: String,
      default: '',
    },
    hasAddFunction: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style module>
.container {
  width: 130px;
  height: 230px;
  position: relative;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.footer {
  width: 100%;
  height: 50px;
  padding: 28px 16px 12px 16px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 8px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.footer_title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
}

.add_icon {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  background-color: #2e76f2;
  border: 4px solid #fff;
  border-radius: 20px;
  transform: translate(0, -50%);
}

.user_name {
  position: absolute;
  left: 12px;
  bottom: 12px;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
}

.user_icon {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 3px solid #fff;
  top: 12px;
  left: 12px;
}
</style>
