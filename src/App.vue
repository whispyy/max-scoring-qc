<template>
  <div id="app">
    <Scoring title="Max Scoring Quebec"/>
  </div>
</template>

<script>
import Scoring from './components/Scoring.vue'

export default {
  name: 'app',
  components: {
    Scoring
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
}
</style>
