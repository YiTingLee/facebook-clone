<template>
  <div>
    <Stories></Stories>
    <PostCreator></PostCreator>
    <Post :class="$style.post" v-for="post in posts" :key="post.id" :post="post"></Post>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import PostCreator from './PostCreator.vue';
import Stories from './Stories.vue';
import Post from './Post.vue';

export default {
  name: 'Main',
  components: {
    Stories,
    PostCreator,
    Post,
  },
  computed: mapGetters({ posts: 'posts' }),
  methods: mapActions({ fetchPosts: 'fetchPosts' }),
  created() {
    this.fetchPosts();
  },
};
</script>

<style module lang="scss">
.post {
  margin-top: 16px;
}
</style>
