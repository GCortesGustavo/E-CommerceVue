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
            <ul class="card-container">
                <li class="card" v-for="product in products" :key="product.id" @click="goToProductDetail(product.id)">
                    <img class="card-img" :src="product.image" alt="Product Image" />
                    <div class="card-content">
                        <p class="card-title">{{ product.title }}</p>
                        <p class="card-price">${{ product.price.toFixed(2) }}</p>
                        <div class="card-stars">
                            <span v-for="star in Math.floor(product.rating.rate)" :key="star" class="star">&#9733;</span>
                            <span v-for="halfStar in Math.floor(5 - product.rating.rate)" :key="'half-' + halfStar" class="star empty">&#9733;</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    
    .card-container {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        padding: 0;
        margin: 0;
        font-family: "Roboto", sans-serif
    }

    .card {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        padding: 1rem;
        width: 200px;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-img {
        max-width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-title {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .card-price {
        color: green;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .card-stars {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .star {
        color: gold;
        font-size: 1.2rem;
    }

    .star.empty {
        color: #ddd;
    }

    /* Responsive Design */
    @media (max-width: 600px) {
        .card-container {
            flex-direction: column;
            align-items: center;
        }

        .card {
            width: 100%;
        }
    }
</style>
