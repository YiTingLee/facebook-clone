<template>
  <Card :class="$style.card">
    <div :class="$style.header">
      <IconButton
        :class="$style.user"
        :iconStyle="{
          width: '32px',
          height: '32px',
          borderRadius: '20px',
        }"
        :image="post.userImage"
        :label="post.userName"
      ></IconButton>
      <IconButton
        :class="$style.more"
        :iconStyle="{
          width: '16px',
          height: '16px',
          color: '#606770',
        }"
        :icon="{ prefix: 'fas', iconName: 'ellipsis-h' }"
      >
      </IconButton>
    </div>
    <div :class="$style.content">
      {{ post.content }}
    </div>
    <div v-if="post.image">
      <img :class="$style.image" :src="post.image" />
    </div>
    <div :class="$style.info_bar">
      <div :class="$style.info">
        <IconButton
          :class="$style.thumbs"
          :iconStyle="{
            width: '12px',
            height: '12px',
            borderRadius: '20px',
            color: '#fff',
          }"
          :icon="{ prefix: 'fas', iconName: 'thumbs-up' }"
        ></IconButton>
        <span>{{ post.like }}</span>
      </div>
      <div :class="$style.info">
        <span>{{ post.comment }} Comments</span>
        <span>{{ post.share }} Shares</span>
      </div>
    </div>
    <Line :class="$style.line"></Line>
    <div :class="$style.buttons_container">
      <IconButton
        :class="$style.like_button"
        :iconStyle="{
          width: '18px',
          height: '18px',
          color: post.liked ? '#14a0f9' : '#aaa',
        }"
        :icon="{ prefix: 'fas', iconName: 'thumbs-up' }"
      >
        <template v-slot:label>
          <span :class="[$style.button_label, { [$style.button_label_active]: post.liked }]">Like</span>
        </template>
      </IconButton>
      <IconButton
        :class="$style.comment_button"
        :iconStyle="{
          width: '18px',
          height: '18px',
          color: '#aaa',
        }"
        :icon="{ prefix: 'fas', iconName: 'comment-alt' }"
      >
        <template v-slot:label>
          <span :class="$style.button_label">Comment</span>
        </template>
      </IconButton>
      <IconButton
        :class="$style.share_button"
        :iconStyle="{
          width: '18px',
          height: '18px',
          color: '#aaa',
        }"
        :icon="{ prefix: 'fas', iconName: 'share' }"
      >
        <template v-slot:label>
          <span :class="$style.button_label">Share</span>
        </template>
      </IconButton>
    </div>
  </Card>
</template>

<script>
import Card from './Card.vue';
import IconButton from './IconButton.vue';
import Line from './Line.vue';

export default {
  name: 'Post',
  components: {
    Card,
    IconButton,
    Line,
  },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style module lang="scss">
.card {
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px 0 16px;

  > div {
    width: auto;
  }
}

.more {
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}

.content {
  padding: 4px 16px 16px 16px;
}

.image {
  width: 100%;
  height: 100%;
  max-height: 700px;
  object-fit: contain;
  background-color: #000;
}

.info_bar {
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  gap: 4px;
  color: #65676b;

  > span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}

.thumbs {
  background-color: #14a0f9;
  padding: 4px 4px 4px 4px;
  border-radius: 20px;
}

.line {
  margin: 0px 16px;
}

.buttons_container {
  padding: 0 16px;
  display: flex;
  gap: 4px;
  border-radius: 4px;
}

.comment_button,
.share_button,
.like_button {
  margin: 6px 0;
  padding: 6px 0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e4e6eb;
  }
}

.button_label {
  color: #656779;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
}

.button_label_active {
  color: #14a0f9;
}
</style>
