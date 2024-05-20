<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import getAllProducts from '@/utils/getAllProducts.js';

const products = ref([]);
const router = useRouter();

const loadProducts = async () => {
    const allProducts = await getAllProducts();
    console.log(allProducts);
    products.value = allProducts;
};

const goToProductDetail = (productId) => {
    router.push({ name: 'ProductDetail', params: { id: productId } });
};

onMounted(() => {
    loadProducts();
});
</script>

<template>
    <div>
        <h1>E-COMMERCE</h1>
        <div v-if="products.length === 0">Cargando productos...</div>
        <div v-else>
        <ul>
            <li class="card" v-for="product in products" :key="product.id" @click="goToProductDetail(product.id)">
            <img :src="product.image" alt="Product Image" />
            <p>{{ product.title }}</p>
            </li>
        </ul>
        </div>
    </div>
</template>

<style scoped>
/* Tu CSS aquí */
</style>
