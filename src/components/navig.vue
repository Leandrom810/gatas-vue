<template>
    <div class="tnav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/galeria">Galeria</RouterLink>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
    .tnav {
        overflow: visible;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1%;
        height: 5vh;
    }
    .tnav a, a:visited {
        justify-content: center;
        padding: 12px 16px;
        margin-left: 1px; margin-right: 1px;
        max-width: 500px;
        text-align: center;
        text-decoration: none;
        color: #060c13;

        transition: all .2s ease-in-out;
        outline: 3px solid transparent;
    }

    .tnav a:hover {
        outline: solid 3px rgba(36, 36, 36, 0.3);
    }

</style>