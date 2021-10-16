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

        <textarea
          :class="$style.text_input"
          :placeholder="`What's on your mind, ${user.userName}?`"
          v-model="content"
        ></textarea>

        <div :class="$style.tool_container">
          <div><span :class="$style.tool_title">Add to your post</span></div>
          <div>
            <IconButton
              :class="$style.toolButton"
              :iconStyle="{
                width: '24px',
                height: '24px',
                color: '#45BD62',
              }"
              :icon="{ prefix: 'fas', iconName: 'images' }"
              tip="Photo/Video"
              tipPosition="Top"
            >
            </IconButton>
            <IconButton
              :class="$style.toolButton"
              :iconStyle="{
                width: '24px',
                height: '24px',
                color: '#1877F2',
              }"
              :icon="{ prefix: 'fas', iconName: 'user-tag' }"
              tip="Tag People"
              tipPosition="Top"
            >
            </IconButton>
            <IconButton
              :class="$style.toolButton"
              :iconStyle="{
                width: '24px',
                height: '24px',
                color: '#F7B928',
              }"
              :icon="{ prefix: 'fas', iconName: 'smile' }"
              tip="Feeling/Activity"
              tipPosition="Top"
            >
            </IconButton>
            <IconButton
              :class="$style.toolButton"
              :iconStyle="{
                width: '24px',
                height: '24px',
                color: '#F5533D',
              }"
              :icon="{ prefix: 'fas', iconName: 'map-marker-alt' }"
              tip="Check In"
              tipPosition="Top"
            >
            </IconButton>
            <IconButton
              :class="$style.toolButton"
              :iconStyle="{
                width: '24px',
                height: '24px',
                color: '#F02849',
              }"
              :icon="{ prefix: 'fas', iconName: 'microphone' }"
              tip="Host a Q&A"
              tipPosition="Top"
            >
            </IconButton>
            <IconButton
              :class="$style.toolButton"
              :iconStyle="{
                width: '24px',
                height: '24px',
                color: '#606770',
              }"
              :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }"
              tip="More"
              tipPosition="Top"
            >
            </IconButton>
          </div>
        </div>

        <div
          :class="[$style.post_button, { [$style.post_button_disable]: isEmptyContent }]"
          @click="$emit('post', { content })"
        >
          Post
        </div>
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
  data() {
    return {
      content: '',
    };
  },
  computed: {
    ...mapGetters({ user: 'user' }),
    isEmptyContent() {
      return !this.content;
    },
  },
};
</script>

<style module lang="scss">
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

  &:hover {
    background-color: #d4d6db;
  }
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
  resize: none;

  &::placeholder {
    color: #65676b;
  }

  &:focus-visible {
    outline: none;
  }
}

.tool_container {
  height: 58px;
  border: 1px solid #ced0d4;
  border-radius: 8px;
  padding: 8px;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.tool_title {
  font-weight: 600;
  padding: 0 8px;
}

.toolButton {
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}

.post_button {
  height: 36px;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #1b74e4;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #1d70db;
  }
}

.post_button_disable {
  color: #bcc0c4;
  background-color: #e4e6eb;
  cursor: not-allowed;

  &:hover {
    background-color: #e4e6eb;
  }
}
</style>
