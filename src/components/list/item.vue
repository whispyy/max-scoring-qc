<template>
  <div class="item" v-bind:style="{ borderTopColor: item.color }">
    <div class="container">
      <div class="score" v-bind:style="{ background: item.color }">{{ item.score }}</div>
      <div class="content">
        <h3 class="title">{{ item.title }}</h3>
        <p class="description">{{ item.desc }}</p>
      </div> 
      <div class="side" @click="toggleSideMenu()">
        <svg viewBox="0 0 24 24" class="icon"><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
        <side-menu :open="openSideMenu">
          <slot></slot>
        </side-menu>
      </div>
    </div>
  </div>
</template>

<script>
import sideMenu from '@/components/list/side-menu'
export default {
  name: 'item',
  components: {
    sideMenu
  },
  props: {
    item : {
      title: String,
      desc: String,
      score: String | Number,
      color: String
    },
  },
  data() {
    return { 
      openSideMenu : false
    }
  },
  methods: {
    toggleSideMenu() {
      this.openSideMenu = !this.openSideMenu
    }
  }
}
</script>

<style scoped>
.item {
  border-top: solid 5px lightskyblue;
  background-color: white;

  width: 60%;
  margin: 10px auto;
}

.container {
  display: flex;
  align-items: center;
}

.score {
  background-color: lightskyblue;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin: 16px;
  border-radius: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 0;
}

.content .title {
  margin: 0;
}

.content .description {
  margin: 0;
}

.side {
  align-self: flex-start;
  position: relative;
  margin: 10px;
  width: 16px;
  height: 16px;
  padding: 5px;
  cursor: pointer;
}

.side:hover {
  background-color: #333333d3;
  border-radius: 100%;
}

.side .icon {
  width: 16px;
  height: 16px;
}
</style>
