<script setup>
  import { ref, onMounted } from 'vue';
  import Header from "./components/header.vue";
  import Footer from "./components/footer.vue";

  import getAllProducts from "./utils/getProducts.js"

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
  <Header></Header>
  <h1>Hola mundo</h1>
  <Footer></Footer>

  <main>
    <div v-if="products.length === 0">Cargando productos...</div>
    <div v-else>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }} - {{ product.image }}
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
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
