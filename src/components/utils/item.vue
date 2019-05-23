<template>
  <div class="item">
    <span class="score">{{ item.score }} / 10</span>
    <span class="text">{{ item.text }}</span> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item : {
      text: String,
      score: String | Number
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  align-content: center;
  justify-content: space-between;
  border-radius: 1rem;
  border: solid 1px lightgrey;
  width: 50%;
  margin: auto;
  padding: 1rem;
}

.text {
  text-align: center;
}
.score {
  border-radius: 1rem;
  background-color: darkgray;
  color: white;
  padding: 0.2rem 1rem;
}
</style>
