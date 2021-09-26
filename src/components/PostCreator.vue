<template>
  <Card>
    <div :class="$style.head">
      <IconButton
        :class="$style.user_icon"
        :iconStyle="{
          width: '40px',
          height: '40px',
          borderRadius: '20px',
        }"
        :image="user.image"
      ></IconButton>
      <div :class="$style.text">What's on your mind, {{ user.userName }}?</div>
    </div>
    <Line></Line>
  </Card>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue';
import IconButton from './IconButton.vue';
import Line from './Line.vue';
export default {
  name: 'PostCreator',
  components: {
    Card,
    IconButton,
    Line,
  },
  computed: mapGetters({ user: 'user' }),
};
</script>

<style module>
.head {
  display: flex;
  gap: 6px;
}

.user_icon {
  width: 40px;
  height: 40px;
}

.text {
  flex: 1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: #64676b;
  background-color: #eff2f5;
  border-radius: 18px;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.text:hover {
  background-color: #e4e6eb;
}
</style>
