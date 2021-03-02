<template>
<div>
    <p>Bonjour 2</p>
    <p>{{ $route.params.id }}</p>
    <p>{{ $store.getters.formattedDate }}</p>
</div>
</template>


<script>

export default { }

</script>