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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Story from './Story.vue';
export default {
  name: 'Stories',
  components: { Story },
  computed: mapGetters({ stories: 'stories' }),
  mounted() {
    this.$store.dispatch('fetchStories');
  },
};
</script>

<style module>
.container {
  display: flex;
  gap: 8px;
  padding: 8px 0 24px 0;
}
</style>
