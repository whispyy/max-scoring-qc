<template>
  <div class="header" :class="{ dark: dark }">
    <div class="header-container">
      <div class="icon" @click="$modal.show('item-add-edit')">
        <svg viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path>
        </svg>
      </div>

      <h2 class="center">{{ title }}</h2>

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
  position: fixed;
  width: 100%;
  top: 44px;
  left: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
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
  position: relative;
}

.icon:hover {
  background-color: #f4f4f4;
}

/* DARK MODE */
.dark .header-container {
  background-color: #1c2938;
}
.dark .header-container h2 {
  color: #f4f4f4;
}
.dark .icon:hover {
  background-color: #10171e;
}
</style>
