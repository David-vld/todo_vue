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

		DELETE_TODO(state, id) {
			const index = state.todos.findIndex(message => message.id === id);
			state.todos.splice(index, 1)
		},

		EDIT_TODO(state, id) {
			const todo = state.todos.find(todo => todo.id === id);
			console.log(todo.content)
			let newContent
			todo.content = newContent
		}
	},

	actions: {
		async LIST_TODOS(store) {
			let response = await Axios.get('http://localhost:3000/api/todos');
			store.commit('SET_TODOS', response.data);
		},

		async ADD_TODO(store, message) {
			let response = await Axios.post('http://localhost:3000/api/todos/', {
				content : message
			}); store.commit('ajouterListe', response.data);
		},

		async DELETE_TODO(store, id) {
			await Axios.delete(`http://localhost:3000/api/todo/${id}`);
			store.commit('DELETE_TODO', id);
		},

		async EDIT_TODO(store, id, newContent) {
			let response = await Axios.put(`http://localhost:3000/api/todo/put/${id}`,{
				content : newContent
			});
			store.commit('EDIT_TODO', id, response.data)
		}
	},
})

