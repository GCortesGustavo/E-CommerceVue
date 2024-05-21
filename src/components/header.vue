<script setup> 
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const navigateToAbout = () => {
        router.push({ name: 'About' });
    };

    const navigateToHome = () => {
        router.push({name: "ProductList"})
    }

    const navigateToCarrito = () => {
        router.push({name: "Carrito"})
    }
</script>


<template>
    <header class="header-content">
        <div class="logo">Logo</div>
        <div class="nav-buttons">
            <button @click="navigateToHome">Home</button>
            <button @click="navigateToAbout">About</button>
            <button @click="navigateToCarrito">Carrito</button>
        </div>
    </header>
</template>

<style>
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #9abaff;
    color: #fff;
    text-align: center;
    overflow-x: hidden;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-buttons {
    display: flex;
    gap: 1rem;
}

button {
    background: #3241f9;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

button:hover {
    background-color: #7292ff;
    color: white;
}
</style>
