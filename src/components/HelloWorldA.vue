<template>
<div>
    <p>Bonjour 1</p>
    <p>{{ $route.params.id }}</p>
    <ol>
        <li v-for="todo in todos"
        :key="todo.id">
        {{ todo.content }}<input type="submit" value="Suprimer" @click="DELETED_TODO(todo.id)">
        <input type="submit" value="Modifier" @click="EDIT_TODO(todo.id)">
        </li>
    </ol>
    <input v-model="message" value="message">
    <button @click="ajouterListe(message)">
        Ajouter
    </button>
</div>
</template>


<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['todos']),
    },

    props: ['message'],

    methods: {
        ajouterListe() {
            this.$store.dispatch('ADD_TODO',this.message)
        },
        DELETED_TODO(id) {
            this.$store.dispatch('DELETE_TODO', id)
        },

        EDIT_TODO(id) {
            this.$store.dispatch('EDIT_TODO', id)
        }
    },

    mounted(){
        this.$store.dispatch('LIST_TODOS');
    },
    beforeDestroy(){
        console.log('bonjour');
    }
}
</script>