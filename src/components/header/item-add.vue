<template>
  <modal name="item-add" :adaptive="true">
    <div class="close" @click="hide()"></div>
    <form class="container" @submit.prevent="submit">
      <h2>Add a new item</h2>
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
  </modal>
</template>

<script>
export default {
  name: 'item-add',
  data() {
    return { 
      newItem: { title: '', desc: '', score: null }
    }
  },
  methods: {
    hide() {
      this.$modal.hide('item-add');
    },
    submit() {
      this.$emit('submit', this.newItem)
      this.newItem = { title: '', desc: '', score: null }
      this.hide()
    }
  }
}
</script>

<style scoped>
.close {
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.container {
  display: flex;
  flex-direction: column;
  height: calc(100% - 20px);
  margin: 10px;
}
</style>
