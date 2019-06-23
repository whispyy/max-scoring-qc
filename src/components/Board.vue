<template>
  <div class="board">
    <div class="container" v-if="!boards.length">
      <h1>put blankstate here</h1>
      <button class="add-button" @click="$modal.show('board-add')">
        New board
      </button>
    </div>

    <div class="container" v-else>
      <button class="add-button" @click="$modal.show('board-add')">
        Add board
      </button>
      <div class="board-list">
        <div
          class="board-tile"
          v-for="board in boards"
          :key="board.id"
          @click="selectActive(board)"
        >
          <h3>{{ board.name }}</h3>
          <p>{{ board.desc }}</p>
        </div>
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

.add-button {
  margin-top: 20px;
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

.add-button:hover {
  background-color: darkgray;
}

.board-list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
}

.board-tile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.board-tile p {
  text-align: left;
  font-weight: 500;
}
</style>
