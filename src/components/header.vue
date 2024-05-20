<script>
    export default {
        name: 'Header'
    }
</script>


<template>
    <header class="header-content">
        <div class="logo">Logo</div>
        <div class="nav-buttons">
            <button>Home</button>
            <button>About</button>
            <button>Carrito</button>
        </div>
    </header>
</template>

<style>
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
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
    background: none;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

button:hover {
    background-color: blue;
    color: white;
}
</style>
