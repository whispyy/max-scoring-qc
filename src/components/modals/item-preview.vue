<template>
  <modal
    name="item-preview"
    @before-open="init"
    @before-close="reset"
    :adaptive="true"
  >
    <div class="close" @click="hide()"></div>
    <div class="container">
      <h2>Item preview</h2>
      <item expand :item="item"></item>
    </div>
  </modal>
</template>

<script>
import { item } from "@/components/list";
export default {
  components: { item },
  name: "item-preview",
  data() {
    return {
      item: { title: "", desc: "", score: null }
    };
  },
  methods: {
    init(event) {
      if (event.params) {
        this.item = event.params.item;
      }
    },
    reset() {
      this.item = { title: "", desc: "", score: null };
    },
    hide() {
      this.$modal.hide("item-preview");
    }
  }
};
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
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
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
