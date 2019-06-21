import Vue from "vue";
import Vuex from "vuex";
import VModal from "vue-js-modal";

Vue.use(Vuex);
Vue.use(VModal);

export default new Vuex.Store({
  state: {
    dark: false,
    boards: [],
    activeBoard: null,
    list: []
  },
  mutations: {
    // board part
    setBoards(state, boards) {
      state.boards = boards;
    },
    addBoard(state, { name, desc }) {
      const id = `board-${state.boards.length}`;
      state.boards.push({ name, desc, id });
    },
    activeBoard(state, { id, name, desc }) {
      state.activeBoard = { id, name, desc };
    },
    closeBoard(state) {
      state.activeBoard = null;
    },

    // scoring list part
    setList(state, list) {
      state.list = list;
    },
    addItem(state, { title, desc, score }) {
      const id = `item-${state.list.length}`;
      state.list.push({ title, desc, score, id });
    },
    updateItem(state, { id, title, desc, score }) {
      const item = state.list.find(item => item.id === id);
      const index = state.list.findIndex(item => item.id === id);
      Vue.set(state.list, index, { ...item, title, desc, score });
    },
    updateItemColor(state, { id, color }) {
      const item = state.list.find(item => item.id === id);
      const index = state.list.findIndex(item => item.id === id);
      Vue.set(state.list, index, { ...item, color });
    },
    removeItem(state, item) {
      state.list.splice(state.list.indexOf(item), 1);
    },

    // setting part
    toggleDark(state) {
      state.dark = !state.dark;
    }
  }
});
