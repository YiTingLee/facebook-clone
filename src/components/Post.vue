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
    <div :class="$style.image"></div>
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
  </Card>
</template>

<script>
import Card from './Card.vue';
import IconButton from './IconButton.vue';

export default {
  name: 'Post',
  components: {
    Card,
    IconButton,
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
</style>
