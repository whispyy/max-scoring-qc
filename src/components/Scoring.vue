<template>
  <div class="scoring" :class="{ dark: dark }">
    <top-bar :dark="dark" :title="title">
      <button @click="toggleDark()">Dark mode</button>
      <button>Settings</button>
    </top-bar>

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
import { topBar } from "@/components/header";
import { item } from "@/components/list";
import { colorPicker, itemAddEdit } from "@/components/modals";
import store from "../store";

export default {
  name: "Scoring",
  components: {
    draggable,
    topBar,
    item,
    colorPicker,
    itemAddEdit
  },
  props: {
    title: String
  },
  computed: {
    list: {
      get() {
        return store.state.list;
      },
      set(value) {
        store.commit("setList", value);
      }
    },
    dark: {
      get() {
        return store.state.dark;
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
    },
    toggleDark() {
      store.commit("toggleDark");
    }
  }
};
</script>

<style scoped>
.scoring {
  height: 100%;
}

.list {
  padding: 10px;
  background-color: #f4f4f4d8;
  width: 60%;
  margin: 10px auto;
}

.dark {
  background-color: #10171e;
}
</style>
