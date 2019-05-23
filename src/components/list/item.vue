<template>
  <div class="item">
    <div class="score">{{ item.score }}</div>
    <div class="text">
      <h3 class="title">{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
    </div> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item : {
      title: String,
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

.score {
  border-radius: 1rem;
  background-color: darkgray;
  color: white;
  padding: 0.2rem 1rem;
}
</style>
