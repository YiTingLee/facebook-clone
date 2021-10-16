<template>
  <div :class="$style.app">
    <Header></Header>
    <div :class="$style.main_container">
      <LeftBar></LeftBar>
      <Main></Main>
      <RightBar></RightBar>
    </div>
  </div>
  <PostModal v-if="postModal" @hide="hidePostModal()"></PostModal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import Header from './components/Header.vue';
import LeftBar from './components/LeftBar.vue';
import RightBar from './components/RightBar.vue';
import Main from './components/Main.vue';
import PostModal from './components/PostModal.vue';

export default {
  name: 'App',
  components: {
    Header,
    LeftBar,
    RightBar,
    Main,
    PostModal,
  },
  computed: mapGetters({ postModal: 'postModal' }),
  methods: { ...mapMutations({ hidePostModal: 'HIDE_POST_MODAL' }) },
};
</script>

<style module lang="scss">
.app {
  background-color: #f0f2f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main_container {
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: calc(100% - 56px); /* minus header */
}
</style>
