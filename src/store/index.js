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

		EDIT_TODO(state, todo) {
            let index = state.todos.find(message => message.id === todo.id);
			index.content = todo.content
			index.color = todo.color
			console.log(todo.color)
        }
	},

	actions: {
		async LIST_TODOS(store) {
			let response = await Axios.get('http://localhost:3000/api/todos');
			store.commit('SET_TODOS', response.data);
		},

		async ADD_TODO(store, message, color) {
			let response = await Axios.post('http://localhost:3000/api/todos/', {
				content : message,
				color : color
			}); store.commit('ajouterListe', response.data, color);
		},

		async DELETE_TODO(store, id) {
			await Axios.delete(`http://localhost:3000/api/todo/${id}`);
			store.commit('DELETE_TODO', id);
		},

		async EDIT_TODO(store, id) {
			let message = prompt("Modifier le todo")
			let color = prompt("Modifier la couleur")
			let response = await Axios.put(`http://localhost:3000/api/todo/put/${id}`,{
				content : message,
				color : color
			});
			store.commit('EDIT_TODO', response.data)
		}
	},
})

