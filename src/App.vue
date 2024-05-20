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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

footer {
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

.main-content {
  flex: 1;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

li.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  cursor: pointer;
}

li.card img {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
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
