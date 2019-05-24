<template>
  <div class="scoring">
    <h1>{{ title }}</h1>

    <form @submit.prevent="addList">
      <div>
        <input
          type="text"
          placeholder="Title"
          v-model="newItem.title"
        />
        <input
          type="number"
          min="0" max="10"
          placeholder="Score"
          v-model="newItem.score"
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          v-model="newItem.desc">
        </textarea>
      </div>
      <button>Add</button>
    </form>

    <draggable v-model="list" group="score" @start="drag=true" @end="drag=false">
      <div v-for="item in list" :key="item.id">
        <item :item="item">
          <button @click="changeColor({ ...item, color: 'lightblue' })">Set color</button>
          <button @click="removeList(item)">Remove</button>
        </item>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { item } from '@/components/list'
import store from '../store'

export default {
  name: 'Scoring',
  components: {
    draggable,
    item
  },
  props: {
    title: String
  },
  data() {
    return { 
      newItem : { title: '', desc: '', score: null }
    }
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
    addList() {
      store.commit('addItem', this.newItem)
      this.newItem = { title: '', desc: '', score: null }
    },
    changeColor(item) {
      store.commit('updateItemColor', item)
    },
    removeList(item) {
      store.commit('removeItem', item)
    }

  }
}
</script>

<style scoped>

</style>
