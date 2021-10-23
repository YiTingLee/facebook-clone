<template>
  <div :class="$style.right_bar">
    <Contacts />
  </div>
</template>

<script>
import Contacts from './Contacts.vue';

export default {
  name: 'RightBar',
  components: {
    Contacts,
  },
};
</script>

<style module lang="scss">
.right_bar {
  overflow-y: scroll;
}
</style>
