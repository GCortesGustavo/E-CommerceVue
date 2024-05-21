import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import About from '@/components/About.vue';
import Carrito from "@/components/Carrito.vue";

const routes = [
    {
        path: '/',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: "/carrito",
        name: "Carrito",
        component: Carrito
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
