<script>
    export default {
        name: "Footer"
    }

    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="footer-content">
        <div class="footer-left">
            <a href="https://github.com/GCortesGustavo" target="_blank">
                <img src="" alt="GitHub" class="icon">
            </a>
            <a href="https://www.linkedin.com/in/cortes-gustavo/" target="_blank">
                <img src="" alt="LinkedIn" class="icon">
            </a>
        </div>
        <div class="footer-center">
            <p>Created by Gustavo Cortes</p>
            <p>&copy; {{ currentYear }} All rights reserved</p>
        </div>
        <div class="footer-right">
            <p>gustavocortes934@gmail.com</p>
        </div>
    </footer>
</template>

<style>
    .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #151951;
    color: #dceaff;
    text-align: center;
    flex-wrap: wrap;
    overflow-x: hidden;
}

.footer-left, .footer-right, .footer-center {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-left, .footer-right {
    flex: 1;
}

.footer-center {
    flex: 2;
    text-align: center;
}

.icon {
    width: 24px;
    height: 24px;
    margin: 0 0.5rem;
}

a {
    color: #dceaff;
    text-decoration: none;
}


@media (min-width: 1024px) {
    .footer-left, .footer-right {
        flex-direction: row;
    }
}
</style>