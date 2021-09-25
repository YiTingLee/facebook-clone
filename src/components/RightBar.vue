<template>
  <div :class="$style.right_bar">
    <Contacts />
  </div>
</template>

<script>
import Contacts from "./Contacts.vue";

export default {
  name: "RightBar",
  components: {
    Contacts
  }
};
</script>

<style module>
.right_bar {
  min-width: 280px;
  width: 360px;
  height: 100%;
  overflow-y: scroll;
}
</style>
