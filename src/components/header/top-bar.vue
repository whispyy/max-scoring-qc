<template>
  <div class="header">
    <div class="header-container">
      <div class="icon" @click="$modal.show('item-add')">
        <svg viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
      </div>

      <h1 class="center">{{ title }}</h1>

      <div class="icon">
        <svg viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-bar',
  props: {
    title: String
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 44px;
}

.header-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
}

.icon {
  padding: 6px;
  width: 28px;
  height: 30px;
  color: darkgray;
  cursor: pointer;
}

.icon:hover {
  background-color: #f4f4f4;
}
</style>
