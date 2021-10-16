<template>
  <div :class="$style.container">
    <Story
      v-for="story in stories"
      :key="story.id"
      :image="story.image"
      :userName="story.userName"
      :userIcon="story.userIcon"
      :hasAddFunction="story.hasAddFunction"
    ></Story>
    <IconButton
      :class="$style.arrow_butotn"
      :icon="{ prefix: 'fas', iconName: 'arrow-right' }"
      :iconStyle="{ width: '16px', height: '16px', color: '#606770' }"
      tip="See All Stories"
    ></IconButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IconButton from './IconButton.vue';
import Story from './Story.vue';
export default {
  name: 'Stories',
  components: { Story, IconButton },
  computed: mapGetters({ stories: 'stories' }),
  mounted() {
    this.$store.dispatch('fetchStories');
  },
};
</script>

<style module lang="scss">
.container {
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px 0 24px 0;
}

.arrow_butotn {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #ddd;
  z-index: 10;

  &:hover {
    background-color: #e4e6eb;
  }
}
</style>
