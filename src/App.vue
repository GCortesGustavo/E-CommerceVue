<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Evita el desplazamiento horizontal */
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; /* Ajusta al 100% del ancho de la pantalla */
}

@media (max-width: 1024px) {
  header, footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
