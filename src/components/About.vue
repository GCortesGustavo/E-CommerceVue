<script setup>
import { ref, onMounted } from 'vue';

const textElement = ref(null);

const texts = [" Gustavo Cortés ", "Desarrollador Web "];
let index = 0;
let charIndex = 0;
let currentText = texts[index];
let isDeleting = false;

const type = () => {
    if (!textElement.value) return;
    
    if (isDeleting) {
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            currentText = texts[index];
        }
    } else {
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pausa antes de empezar a borrar
            return;
        }
    }
    
    textElement.value.innerText = currentText.substring(0, charIndex);
    setTimeout(type, isDeleting ? 50 : 150);
};

onMounted(() => {
    type();
});
</script>

<template>
    <div class="profile-container">
        <h3 class="intro">Hola! Soy</h3>
        <h1 class="name" ref="textElement">Gustavo Cortés</h1>
        <div class="image-container">
            <img src="../assets/GustavoDev.jpg" alt="Gustavo" class="profile-image">
        </div>
        <p class="description">Gracias por tomarte el tiempo de conocer al desarrollador detrás de este proyecto.</p>

        <h4 class="section-title">Un poco de mi historia</h4>
        <p class="story">Soy un joven de 24 años que inicio en el mundo de la programación hace 1 año y 6 meses, de manera curiosa me topé con un curso de desarrollo web básico y desde ahí, quedé fascinado con el mundo IT. Actualmente tengo un título en tecnicatura en Marketing que me ayuda a poder mejorar mi conexión con las personas y captar sus necesidades y deseos. Trabajo en el sector de Recurso Humanos esperando llegar al tan ansiado puesto IT.</p>

        <h4 class="section-title">Tecnologías utilizadas en este proyecto</h4>
        <p class="technologies">Este proyecto surgió de la idea de tropezarme. ¿Cómo que tropezarte Gustavo? Claro, este proyecto fue realizado desde 0, sin ninguna guía (solo en la conexión con pasarela de pagos) para poder entender cómo funcionan estas tecnologías. Este proyecto fue realizado con:</p>

        <div class="tech-container">
            <img src="../assets/vuelogo.png" alt="Vue.js Logo" class="tech-logo">
            <p class="tech-name">Vue.js</p>
        </div>

        <p class="social-invite">Si te interesan mis trabajos y mi perfil, te dejo mis redes sociales para que puedas conocerme mejor! Gracias por tu tiempo ❤</p>
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: #fff;
    font-family: 'Roboto', sans-serif;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s ease-in-out;
}

.intro {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    animation: slideInFromLeft 1s ease-in-out;
}

.name {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    animation: slideInFromRight 1s ease-in-out;
    border-right: 2px solid #fff;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s steps(22), blink 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes blink {
    from, to {
        border-color: transparent;
    }
    50% {
        border-color: white;
    }
}

.image-container {
    overflow: hidden;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    animation: zoomIn 1s ease-in-out;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.description, .story, .technologies, .social-invite {
    font-size: 1rem;
    margin: 1rem 0;
    line-height: 1.6;
    animation: fadeInUp 1s ease-in-out;
}

.section-title {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    animation: fadeInDown 1s ease-in-out;
}

.tech-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    animation: fadeIn 1s ease-in-out;
}

.tech-logo {
    width: 50px;
    height: 50px;
}

.tech-name {
    font-size: 1.2rem;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideInFromRight {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes zoomIn {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}

@keyframes fadeInUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fadeInDown {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
