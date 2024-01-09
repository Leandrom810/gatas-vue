<template>
    <div class="bg">
        <div class="cluster first" :style="{translate: `${rndInt(-280, -30)}vw 20vh`}">
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
        </div>
        <div class="cluster second" :style="{translate: `${rndInt(-240, -60)}vw -28vh`}">
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
        </div>
        <div class="cluster third" :style="{translate: `${rndInt(-240, -30)}vw -80vh`}">
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
            <div class="cloud-circle"><div class="inside-circle"></div></div>
        </div>
    </div>
</template>

<script setup>
    
    function rndInt(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
}
</script>

<style lang="scss" scoped>
    .bg {
        position: fixed;
        bottom: 0; left: 0;
        z-index: -1;
    }
    .cluster .cloud-circle {
        background-color: rgb(175, 175, 175);
        height: 100px;
        position: relative;
        display: inline-block;
        width: 100px;
        offset: none;
        border-radius: 50%;
        overflow: hidden;

        animation-name: slide;
        animation-duration: 22s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes slide {
        from {}
        to {transform: translateX(400vw);}
    }
    .inside-circle {
        background-color: antiquewhite;
        height: 100px;
        position: relative;
        display: inline-block;
        width: 100px;
        offset: none;
        border-radius: 50%;
        bottom: 10px;
        transform: scale(1.05);
        border: 2px solid transparent;
    }

    .cloud-circle:nth-child(2) {
        transform: scale(1.35);
        bottom: 10px;
        left: -35px;
    }
    .cloud-circle:nth-child(3) {
        transform: scale(1.45);
        bottom: 14px;
        left: -75px;
    }
    .cloud-circle:nth-child(4) {
        transform: scale(1.2);
        bottom: 6px;
        left: -120px;
    }

</style>