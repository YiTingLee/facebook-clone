<template>
  <div :class="$style.app">
    <Header :class="$style.header"></Header>
    <div :class="$style.main_container">
      <LeftBar :class="$style.left_bar"></LeftBar>
      <div :class="$style.left_bar_shadow"></div>
      <Main></Main>
      <RightBar :class="$style.right_bar"></RightBar>
      <div :class="$style.right_bar_shadow"></div>
    </div>
  </div>
  <PostModal v-if="postModal" @hide="hidePostModal()" @post="hidePostModal()"></PostModal>
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
  display: flex;
  flex-direction: column;
}

.main_container {
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 56px;
}

.header,
.left_bar,
.right_bar {
  position: fixed;
  z-index: 100;
}

.left_bar_shadow,
.right_bar_shadow {
  position: static;
}

.left_bar_shadow,
.right_bar_shadow,
.left_bar,
.right_bar {
  min-width: 280px;
  width: 360px;
  height: calc(100% - 56px);
  background-color: #f0f2f5;

  @media (max-width: 1200px) {
    display: none;
  }
}

.left_bar {
  left: 0;
}

.right_bar {
  right: 0;
}
</style>
