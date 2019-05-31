<template>
  <div class="scoring" :class="{ dark: dark }">
    <top-bar :dark="dark" :title="title" @submit="addList">
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
          <button @click="removeList(item)">Remove</button>
        </item>
      </div>
    </draggable>

    <!-- BEGIN modals declarations -->
    <item-add @submit="addList"></item-add>
    <color-picker @update="updateColor"></color-picker>
    <!-- END modals declarations -->
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { itemAdd, topBar } from "@/components/header";
import { colorPicker, item } from "@/components/list";
import store from "../store";

export default {
  name: "Scoring",
  components: {
    draggable,
    topBar,
    item,
    colorPicker,
    itemAdd
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
    addList(item) {
      store.commit("addItem", item);
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
