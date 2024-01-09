<template>
    <div class="intro">
        <h1>Bem vindo! 🐱</h1>
        <p>Este site reunirá diversas fotos das minhas gatas.<br>
        Criei este projeto mais para servir como uma prática com desenvolvimento de sites
        utilizando <a href="https://vuejs.org/">Vue.js</a>, mas nada lhe impede de utilizar este site
        para ficar admirando fotos fofinhas de gatinhos. <strike>Afinal de contas, quem não gosta de gatinhos?</strike>
        </p>
        <h4>Temos fotos dos seguintes bichanos:</h4>
        <ul>
            <li v-for="g in gatas" class="gatas">
                <p> {{ g.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import {gatas} from '../gatas.js';
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
    .intro {
        background-color: rgba(36, 36, 36, 0.4);
        width: clamp(414px, 70%, 1000px);
        margin: auto;
        border: 2px solid rgba(36, 36, 36, 0.4);
        padding: 1%;
    }
    .intro h1 {
        text-align: center;
        font-size: clamp(1.8rem, 3.5vw, 3rem);
    }
    .intro p > strike {
        color: rgba(8, 8, 8, 0.45);
        font-weight: 550;
    }
    .intro {
        font-size: clamp(1rem, 1.1vw, 1.25rem);
    }
    .gatas li {
        margin: 0;
        padding: 0;
    }
    a {
        color: #060c13;
        font-weight: bold;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>