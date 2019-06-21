<template>
  <div class="board">
    <button @click="$modal.show('board-add')">New board</button>
    <div class="empty" v-if="!boards.length">
      <h1>put blankstate here</h1>
      <button @click="$modal.show('board-add')">New board</button>
    </div>

    <div class="board-list">
      <div
        class="board-tile"
        v-for="board in boards"
        :key="board.id"
        @click="selectActive(board)"
      >
        <h3>{{ board.name }}</h3>
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
    boards: {
      get() {
        return store.state.boards;
      },
      set(value) {
        // put here call to retrieve available board
        store.commit("setBoards", value);
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.board-list {
  display: flex;
  align-items: flex-start;
}

.board-tile {
  display: flex;
  flex-wrap: wrap;
  background-color: darkgrey;
  cursor: pointer;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;

  height: 120px;
  width: 200px;
}

.board-tile h3 {
  color: white;
  font-weight: 600;
}
</style>
