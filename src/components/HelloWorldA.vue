<template>
<div>
    <p>Bonjour 1</p>
    <p>{{ $route.params.id }}</p>
    <ol>
        <li v-for="(todo, item) in todos"
        :key="todo.id">
        {{ todo.content }}<input type="submit" value="Suprimer" @click="suprimerListe(item)">
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

    methods: {
        ajouterListe() {
            this.$store.dispatch('ADD_TODO',this.message)
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