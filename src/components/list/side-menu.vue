<template>
  <div class="side-menu" v-bind:class="{'-open': open }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'side-menu',
  props: {
    open: Boolean
  }
}
</script>

<style scoped>
.side-menu {
  display: none;
  position: absolute;
  right: 0;
  z-index: 2;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: scale(0.9);
  transform-origin: top right;
  transition: all 0.2s;
}

.side-menu.-open {
  display: block;
  opacity: 1;
  transform: scale(1);
}

button {
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 0.5em 1.5rem;
}

button:hover,
button:focus {
  background-color: #eeeeee;
}
</style>
