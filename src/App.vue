<script setup>
  import { ref, onMounted } from 'vue';
  import Header from "./components/header.vue";
  import Footer from "./components/footer.vue";
  import Card from './components/card.vue';

  import getAllProducts from "./utils/getAllProducts.js"

  const products = ref([])

  const loadProducts = async() => {
    const allProducts = await getAllProducts();
    console.log(allProducts);
    products.value = allProducts
  }

  onMounted(() => {
    loadProducts();
  });
</script>

<template>
  <div class="app-container">
    <Header />
    <div class="main-content">
      <h1>E-COMERCE</h1>

      <main>
        <div v-if="products.length === 0">Cargando productos...</div>
        <div v-else>
          <ul>
            <li :class="card" v-for="product in products" :key="product.id">
              {{ product.title }}
              <!--  - {{ product.price }} - {{ product.image }} -->
            </li>
          </ul>
        </div>
      </main>
    </div>
    <Footer />
    <Card />
  </div>
  
</template>

<style scoped>

  * {
    margin: 0;
    padding: 0;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }

    header {
    line-height: 1.5;
  }

  .main-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.card {
    background-color: red;
    margin: 10px;
  }


  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
