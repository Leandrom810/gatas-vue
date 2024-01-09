<template>
    <div class="bg-container" :key="indexo" @click="$emit('close')">
        <div class="pic">
            <img :src="`../src/assets/${arr[indexo].path}`" alt="Falho :(">
        </div>
    </div>
    <div class="tx">
        <p>{{ arr[indexo].desc }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const aaa = (oi) => { alert(oi); }
    const props = defineProps({
        arr: Array,
        index: Number,
    })
    const indexo = ref(props.index);
    const emit = defineEmits(['close']);

</script>

<style lang="scss" scoped>
    p {
        font-size: clamp(1rem, 3vh, 2rem);
        text-decoration: solid;
    }
    .bg-container {
        width: 100vw; height: 100vh;
        overflow: hidden;

        background-color: rgba(0, 0, 0, 0.85);
        position: fixed;
        top: 0px; left: 0px;

        display: flex;
        z-index: 2;

    }
    .bg-container img {
        display: block;
        
        margin: auto;
        max-width: 90%;
        max-height: 95%;
        object-fit: contain;
        
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
    }
    .tx {
        position: fixed;
        bottom: 0px;
        width: 100%;
        text-align: center;
        padding-top: 10px;
        z-index: 3;
        
        color: antiquewhite;
        background: rgb(2,0,36);
        background: linear-gradient(0deg, rgba(2,0,10,0.7) 5%, rgba(0,0,0,0) 100%);
    }

    @media (max-aspect-ratio: 3/4) {
        .bg-container img {
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>