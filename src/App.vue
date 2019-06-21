<template>
  <div id="app" :class="{ dark: dark }">
    <top-bar :dark="dark" title="Max Scoring Quebec">
      <button @click="toggleDark()">Dark mode</button>
      <button>Settings</button>
    </top-bar>

    <Board v-if="!activeBoard" :dark="dark" />
    <Scoring v-else :board="activeBoard" :dark="dark" />
  </div>
</template>

<script>
import { topBar } from "@/components/header";
import Board from "@/components/Board.vue";
import Scoring from "@/components/Scoring.vue";

import store from "./store";

export default {
  name: "app",
  components: {
    topBar,
    Board,
    Scoring
  },
  computed: {
    dark: {
      get() {
        return store.state.dark;
      }
    },
    activeBoard: {
      get() {
        return store.state.activeBoard;
      }
    }
  },
  methods: {
    toggleDark() {
      store.commit("toggleDark");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
}

.dark {
  background-color: #10171e;
}
</style>
