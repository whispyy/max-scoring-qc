import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        list: [],
        count: 0
	},
	mutations: {
        setList(state, list) {
		    state.list = list
        },
		addList(state, { text, score }) {
            const order = state.list.length;
			state.list.push({ text, score, order })
		},
        removeList(state, item) {
			state.list.splice(state.list.indexOf(item), 1)
		}
	}
})
