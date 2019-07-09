<template>
  <div id="app" :class="{ dark: dark }">
    <top-line></top-line>
    <top-bar :dark="dark" title="Max Scoring Quebec" @home="closeBoard()">
      <button @click="toggleDark()">Dark mode</button>
      <button>Settings</button>
    </top-bar>

    <Board v-if="!activeBoard" :dark="dark" />
    <Scoring v-else :board="activeBoard" :dark="dark" />
  </div>
</template>

<script>
import { topBar, topLine } from "@/components/header";
import Board from "@/components/Board.vue";
import Scoring from "@/components/Scoring.vue";

import store from "./store";

export default {
  name: "app",
  components: {
    topBar,
    topLine,
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
    },
    closeBoard() {
      store.commit("closeBoard");
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
