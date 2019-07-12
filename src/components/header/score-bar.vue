<template>
  <div class="header" :class="{ dark: dark }">
    <div class="header-container">
      <div class="item">
        <h3 class="title">{{ title }}</h3>
        <div class="icon" @click="$modal.show('edit-title')">
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="item">
        <div class="icon" @click="$modal.show('item-add-edit')">
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="item">
        <div class="icon" @click="close()">
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "score-bar",
  props: {
    title: String,
    dark: Boolean
  },
  methods: {
    close() {
      store.commit("closeBoard");
    }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  height: 44px;
}

.header-container {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.item + .item {
  content: "";
  border-left: 1px solid darkgray;
}

.item {
  display: flex;
  align-items: center;
  padding: 0 6px;
}

.title {
  margin-right: 10px;
}

.icon {
  padding: 6px;
  width: 28px;
  height: 30px;
  color: darkgray;
  cursor: pointer;
  position: relative;
}

.icon svg {
  width: 100%;
  height: 100%;
}

.icon:hover {
  background-color: #f4f4f4;
}

/* DARK MODE */
.dark .header-container h3 {
  color: #f4f4f4;
}
.dark .icon:hover {
  background-color: #1c2938;
}
.dark .item + .item {
  border-left: 1px solid white;
}
</style>
