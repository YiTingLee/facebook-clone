<template>
  <div :class="$style.background" @click="this.$emit('hide')">
    <Card :class="$style.card" @click.stop="">
      <div :class="$style.header">
        <span :class="$style.header_title">Create post</span>
        <IconButton
          :class="$style.close_button"
          :iconStyle="{
            width: '24px',
            height: '24px',
            color: '#606770',
          }"
          :icon="{ prefix: 'fas', iconName: 'times' }"
          @click="this.$emit('hide')"
        >
        </IconButton>
      </div>

      <Line :class="$style.line"></Line>

      <div :class="$style.main">
        <IconButton
          :class="$style.user_icon"
          :iconStyle="{
            width: '32px',
            height: '32px',
            borderRadius: '20px',
          }"
          :image="user.image"
          :label="user.userName"
        ></IconButton>

        <textarea :class="$style.text_input" :placeholder="`What's on your mind, ${user.userName}?`"></textarea>
      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card';
import Line from './Line';
import IconButton from './IconButton';

export default {
  name: 'PostModal',
  components: { Card, Line, IconButton },
  computed: {
    ...mapGetters({ user: 'user' }),
  },
};
</script>

<style module>
.background {
  position: fixed;
  background-color: rgb(244, 244, 244, 0.8);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 500px;
  height: 428px;
  padding: 0px;
}

.header {
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
}

.close_button {
  width: 36px;
  height: 36px;
  background-color: #e4e6eb;
  border-radius: 20px;
  position: absolute;
  top: 12px;
  right: 16px;
  cursor: pointer;
}

.close_button:hover {
  background-color: #d4d6db;
}

.line {
  margin: 0;
}

.main {
  display: flex;
  flex-direction: column;
}

.user_icon {
  display: flex;
  justify-content: flex-start;
  padding: 16px 0;
  margin: 0 16px;
}

.text_input {
  margin: 0 16px;
  height: 154px;
  border: none;
  font-size: 22px;
}

.text_input::placeholder {
  color: #65676b;
}

.text_input:focus-visible {
  outline: none;
}
</style>
