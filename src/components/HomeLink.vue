<template>
    <a href="/">Accueil</a>
</template>

<script>
export default {
    name:'HomeLink',
    props: ['url', 'text']
}
</script>

<style>
    a {
        text-decoration: none;
    }


</style>