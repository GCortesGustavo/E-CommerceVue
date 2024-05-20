<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import getProduct from '@/utils/getProduct.js';

const route = useRoute();
const product = ref(null);

const loadProduct = async () => {
    const productId = route.params.id;
    const dataProduct = await getProduct(productId);
    product.value = dataProduct;
};

onMounted(() => {
    loadProduct();
});
</script>

<template>
    <div v-if="product">
        <h1>{{ product.title }}</h1>
        <img :src="product.image" alt="Product Image" />
        <p>Precio: {{ product.price }}</p>
        <p>Categoría: {{ product.category }}</p>
        <p>{{ product.description }}</p>
    </div>
    <div v-else>
        Cargando producto...
    </div>
</template>

<style scoped>
/* Estilos para el detalle del producto */
</style>