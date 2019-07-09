<template>
  <div class="header" :class="{ dark: dark }">
    <div class="header-container">
      <div class="icon" @click="$emit('home')">
        <svg viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          ></path>
        </svg>
      </div>

      <h1 class="center">{{ title }}</h1>

      <div class="icon" @click="toggleMenu()">
        <svg viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
        <dropdown :open="openMenu" :position="{ top: 30, width: 200 }">
          <slot></slot>
        </dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { dropdown } from "@/components/utils";
export default {
  name: "top-bar",
  components: {
    dropdown
  },
  props: {
    title: String,
    dark: Boolean
  },
  data() {
    return {
      openMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
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
  top: 32px;
  left: 0;
  z-index: 2;
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
.dark .header-container h1 {
  color: #f4f4f4;
}
.dark .icon:hover {
  background-color: #10171e;
}
</style>
