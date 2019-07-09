<template>
  <div class="board">
    <div class="container" v-if="!boards.length">
      <h2>{{ $t("board.welcome") }}</h2>
      <p>{{ $t("board.intro") }}</p>
      <action-button @click="$modal.show('board-add')">
        {{ $t("board.new_board") }}
      </action-button>
    </div>

    <div class="container" v-else>
      <action-button @click="$modal.show('board-add')">
        {{ $t("board.add_board") }}
      </action-button>
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
import { actionButton } from "@/components/utils";
import { boardAdd } from "@/components/modals";
import store from "../store";

export default {
  name: "Board",
  components: {
    actionButton,
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
