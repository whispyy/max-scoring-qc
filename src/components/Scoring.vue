<template>
  <div class="scoring">
    <top-bar :title="title" @submit="addList"></top-bar>

    <draggable
      class="list"
      v-model="list"
      group="score"
      @start="drag=true" @end="drag=false">
      <div v-for="item in list" :key="item.id">
        <item :item="item">
          <button @click="$modal.show('color-picker', { item })">Set color</button>
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
import draggable from 'vuedraggable'
import { itemAdd, topBar } from '@/components/header'
import { colorPicker, item } from '@/components/list'
import store from '../store'

export default {
  name: 'Scoring',
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
        return store.state.list
      },
      set(value) {
        store.commit('setList', value)
      }
    }
  },
  methods: {
    addList(item) {
      store.commit('addItem', item)
    },
    removeList(item) {
      store.commit('removeItem', item)
    },
    updateColor(item) {
      store.commit('updateItemColor', item)
    }

  }
}
</script>

<style scoped>
.list {
  padding: 10px;
  background-color: #f4f4f4d8;
  width: 60%;
  margin: 10px auto;
}
</style>
