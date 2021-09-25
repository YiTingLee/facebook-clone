<template>
  <div :class="$style.search_bar">
    <div :class="$style.icon">
      <font-awesome-icon
        style="width: 16px; height: 16px; color: #777777"
        :icon="{ prefix: 'fas', iconName: 'search' }"
      />
    </div>
    <div>
      <input :class="$style.input" placeholder="Search Facebook" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
};
</script>

<style module>
.search_bar {
  width: 252px;
  height: 40px;
  background-color: #eff2f5;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.icon {
  margin-left: 12px;
}

.input {
  border: none;
  margin-left: 12px;
  background-color: #eff2f5;
  outline-width: 0px;
  font-size: 16px;
}
</style>
