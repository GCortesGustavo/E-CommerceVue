<script>
    export default {
        name: 'Header'
    }
</script>


<template>
    <div class="header-content">
        <header>    
            <div>Logo</div>
            <div>
                <ol>
                    <ul><button>Home</button></ul>
                    <ul><button>About</button></ul>
                    <ul><button>Carrito</button></ul>
                </ol>
            </div>
        </header>
    </div>
</template>

<style>
    button:hover{
        background-color: blue;
    }

    .header-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ol {
        display: flex;
        flex-direction: row;
    }
</style>
