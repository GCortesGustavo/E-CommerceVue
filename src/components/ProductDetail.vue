<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import getProduct from '@/utils/getProduct.js';

const route = useRoute();
const router = useRouter();
const product = ref(null);

const loadProduct = async () => {
    const productId = route.params.id;
    const dataProduct = await getProduct(productId);
    product.value = dataProduct;
};

const goToHome = () => {
    router.push({ name: 'ProductList' });
};

onMounted(() => {
    loadProduct();
});
</script>

<template>
        <div v-if="product" class="product-detail">
            <div class="product-image">
                <img :src="product.image" alt="Product Image" />
            </div>
            <div class="product-info">
                <h1>{{ product.title }}</h1>
                <p class="product-price">Price: ${{ product.price.toFixed(2) }}</p>
                <p class="product-category">Category: {{ product.category }}</p>
                <p class="product-description">{{ product.description }}</p>
                <button class="buy-button">Buy Now</button>
                <button class="back-button" @click="goToHome">Back to Home</button>
            </div>
        </div>
        <div v-else>
            Cargando producto...
        </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    .product-detail {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        padding: 2rem;
        font-family: "Roboto", sans-serif;
        margin-top: 10vh;
    }

    .product-image {
        flex: 1 1 40%;
        max-width: 40%;
    }

    .product-image img {
        max-width: 100%;
        max-height: 60vh;
        border-radius: 8px;
    }

    .product-info {
        flex: 1 1 50%;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product-info h1 {
        margin-bottom: 1rem;
    }

    .product-price {
        color: green;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .product-category, .product-description {
        margin-bottom: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: background-color 0.3s, color 0.3s;
    }

    .buy-button {
        background-color: blue;
        color: white;
    }

    .buy-button:hover {
        background-color: darkblue;
    }

    .back-button {
        background-color: grey;
        color: white;
    }

    .back-button:hover {
        background-color: darkgrey;
    }

    /* Responsive Design */
    @media (max-width: 600px) {
        .product-detail {
            flex-direction: column;
            align-items: center;
        }

        .product-image, .product-info {
            max-width: 100%;
        }
    }
</style>