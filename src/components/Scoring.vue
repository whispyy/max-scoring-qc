<template>
  <div class="scoring">
    <score-bar :dark="dark" :title="board.name"></score-bar>
    <draggable
      class="list"
      v-model="list"
      group="score"
      @start="drag = true"
      @end="drag = false"
    >
      <div v-for="item in list" :key="item.id">
        <item :dark="dark" :item="item">
          <button @click="$modal.show('color-picker', { item })">
            Set color
          </button>
          <button @click="$modal.show('item-add-edit', { item })">Edit</button>
          <button @click="removeList(item)">Remove</button>
        </item>
      </div>
    </draggable>

    <!-- BEGIN modals declarations -->
    <item-add-edit @save="addEditList"></item-add-edit>
    <color-picker @update="updateColor"></color-picker>
    <!-- END modals declarations -->
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { scoreBar } from "@/components/header";
import { item } from "@/components/list";
import { colorPicker, itemAddEdit } from "@/components/modals";
import store from "../store";

export default {
  name: "Scoring",
  components: {
    draggable,
    item,
    colorPicker,
    itemAddEdit,
    scoreBar
  },
  props: {
    board: {
      id: String,
      name: String,
      desc: String
    },
    dark: Boolean
  },
  computed: {
    list: {
      get() {
        return store.state.list;
      },
      set(value) {
        // put here call to retrieve scoring list
        store.commit("setList", value);
      }
    }
  },
  methods: {
    addEditList(item, isEdit) {
      const type = isEdit ? "updateItem" : "addItem";
      store.commit(type, item);
    },
    removeList(item) {
      store.commit("removeItem", item);
    },
    updateColor(item) {
      store.commit("updateItemColor", item);
    }
  }
};
</script>

<style scoped>
.scoring {
  max-height: 100%;
}

.list {
  padding: 10px;
  background-color: #f4f4f4d8;
  width: 60%;
  margin: 10px auto;
}
</style>
