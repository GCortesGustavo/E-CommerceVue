<script>
    export default {
        name: "Footer"
    }
</script>

<template>
    <div class="footer-content">
        <footer>
            <p>Created By Gustavo Cortes</p>
            <p>May 2024</p>
        </footer>
    </div>
</template>

<style>
    footer{
        display: flex;
        flex-direction: row;
        background-color: antiquewhite;
    }

    .footer-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        color: black
    }
</style>