<template>
  <div class="board">
    <div class="empty" v-if="!board.length">
      <h1>put blankstate here</h1>
      <button @click="$modal.show('board-add')">New board</button>
    </div>

    <div class="">
      <div v-for="b in board" :key="b.id" @click="selectActive(b)">
        {{ b.name }}
      </div>
    </div>

    <!-- BEGIN modals declarations -->
    <board-add @save="create"></board-add>
    <!-- END modals declarations -->
  </div>
</template>

<script>
import { boardAdd } from "@/components/modals";
import store from "../store";

export default {
  name: "Board",
  components: {
    boardAdd
  },
  props: {
    dark: Boolean
  },
  computed: {
    board: {
      get() {
        return store.state.board;
      },
      set(value) {
        // put here call to retrieve available board
        store.commit("setBoard", value);
      }
    }
  },
  methods: {
    create(board) {
      store.commit("addBoard", board);
    },
    selectActive(board) {
      store.commit("activeBoard", board);
    }
  }
};
</script>

<style scoped>
.board {
  max-height: 100%;
}
</style>
