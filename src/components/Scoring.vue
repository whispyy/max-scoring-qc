<template>
  <div class="scoring">
    <h1>{{ title }}</h1>

    <form @submit.prevent="addList">
      <input
        type="text"
        placeholder="Restaurant"
        v-model="newItem.text"
      />
      <input
        type="number"
        min="0" max="10"
        placeholder="Score"
        v-model="newItem.score"
      />
      <button>Add</button>
    </form>

    <draggable v-model="list" group="score" @start="drag=true" @end="drag=false">
      <div v-for="item in list" :key="item.id">
        <item class="item" :item="item">
          <button class="remove" @click="removeList(item)">x</button>
        </item>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import item from '@/components/utils/item'
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
      newItem : { text: '', score: null }
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
      store.commit('addList', this.newItem)
      this.newItem = { text: '', score: null }
    },
    removeList(id) {
      store.commit('removeList', id)
    }

  }
}
</script>

<style scoped>
.item {
  margin: 1rem auto;
}

.remove {
  cursor: pointer;  
  border-radius: 1rem;
  background-color: darkgray;
  color: white;
  padding: 0.2rem 1rem;
}

.remove:hover {
  background-color: lightgrey;
}
</style>
