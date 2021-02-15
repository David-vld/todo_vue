<template>
  <div id="app">
    <nav>
      <HomeLink />
      <a href="/about">A propos</a>
      <a href="/contact">Contact</a>
    </nav>
    <p>Bienvenue sur notre page d'<HomeLink /></p>
    <Navigation url="about" text="accueil" />
  </div>
</template>

<script>
import HomeLink from './components/HomeLink.vue'
import Navigation from './components/NavLink'

export default {
  name: 'App',
  components: {
    HomeLink,
    Navigation
  }
}



</script>