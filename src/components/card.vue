<script>
    import { ref, onMounted } from 'vue';
    export default {
        name: "Card"
    }
    import getProduct from '@/utils/getProduct';

    const product = ref([])

    const loadProduct = async() => {
        const dataProduct = await getProduct()
        console.log(dataProduct);
        product.value = dataProduct
    }

    onMounted(() => {
        loadProduct()
    })
</script>

<template>
    <main>
        
        
            <div :class="card" v-for="product in product" :key="product.id">
                {{ product.title }} - {{ product.price }} - {{ product.image }}
            </div>
        
    </main>
</template>