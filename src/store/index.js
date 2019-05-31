import Vue from "vue";
import Vuex from "vuex";
import VModal from "vue-js-modal";

Vue.use(Vuex);
Vue.use(VModal);

export default new Vuex.Store({
  state: {
    dark: false,
    list: [],
    count: 0
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    addItem(state, { title, desc, score }) {
      const id = `item-${state.list.length}`;
      state.list.push({ title, desc, score, id });
    },
    updateItemColor(state, { id, color }) {
      const item = state.list.find(item => item.id === id);
      const index = state.list.findIndex(item => item.id === id);
      Vue.set(state.list, index, { ...item, color });
    },
    removeItem(state, item) {
      state.list.splice(state.list.indexOf(item), 1);
    },

    toggleDark(state) {
      state.dark = !state.dark;
    }
  }
});
