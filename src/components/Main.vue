<template>
  <div>
    <Stories></Stories>
    <PostCreator></PostCreator>
  </div>
</template>

<script>
import PostCreator from './PostCreator.vue';
import Stories from './Stories.vue';
export default {
  name: 'Main',
  components: {
    Stories,
    PostCreator,
  },
};
</script>

<style module></style>
