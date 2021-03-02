import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: [

		]
	},

	mutations: {
		ajouterListe(state, todo) {
			state.todos.push(todo);
		},

		SET_TODOS(state, todos) {
			state.todos = todos;
		},
	},

	actions: {
		async LIST_TODOS(store) {
			let response = await Axios.get('http://localhost:3000/api/todos');
			store.commit('SET_TODOS', response.data);
		},

		async ADD_TODO(store, message) {
			let response = await Axios.post('http://localhost:3000/api/todos/', {
				content : message
			});

			store.commit('ajouterListe', response.data);
		}
	}
})

