<template>
    <div>
        <div class="panel" v-show="!showing">
            <div class="bts">
                <button @click="shuf">Randomizar</button>
                <button @click="restore">Restaurar</button>
            </div>
            <span class="space"></span>
            <div class="boxes">
                <div class="box">
                    <label><input type="checkbox" id="kiki" value="kiki" v-model="tags">Kiki</label>
                </div>
                <div class="box">
                    <label><input type="checkbox" id="kiki" value="tiska" v-model="tags">Tiska</label>
                </div>
                <div class="box">
                    <label><input type="checkbox" id="gaxinha" value="gaxinha" v-model="tags">Gaxinha</label>
                </div>
                <div class="box">    
                    <input type="checkbox" id="tatatinha" value="tatatinha" v-model="tags">
                    <label for="tatatinha">Tatatinha</label>
                </div>
                <div class="box">
                    <input type="checkbox" id="tatasminha" value="tatasminha" v-model="tags">
                    <label for="tatasminha">Tatasminha</label>
                </div>
            </div>
        </div>
        <div class="galeria">
            <TransitionGroup name="imgss">
                <div class="pic" v-for="(f, index) in currentPicAr" key="used"
                :style="`background-image:url(../gatas-vue/src/assets/${f.path})`"
                :class="f.shape"
                @click="showPic(index)"
                v-show="filter(index)">
                </div>
            </TransitionGroup>
        </div>
        <div class="focus">
            <Focuspic 
            v-if="showing" :arr="currentPicAr"
            :index="indx" :key="indx.value" @close="showing = false"></Focuspic>
        </div>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue'
    import { fotos } from '../gatas.js'
    import Focuspic from '../components/focuspic.vue'
    import arrayShuffle from 'array-shuffle'

    
    const currentPicAr = ref(fotos);
    const indx = ref(0)
    const showing = ref(false);
    let changed = 0;
    const tags = ref([]);

    const filter = (index) => {
        if (!tags.value.length) { return true }
        if (currentPicAr.value[index].kot.some(val => tags.value.includes(val))) {
            return true;
        }
        else {
            return false;
        }
    }   

    const showPic = (index) => {
        indx.value = index;
        showing.value = true;
    }
    const shuf = () => {
        currentPicAr.value = arrayShuffle(currentPicAr.value);
    }
    const restore = () => {
        //mudando a key para re-rendrenizar antes de mudar os valores do array
        changed++;
        currentPicAr.value = fotos;
    }

</script>

<style lang="scss" scoped>
    .space {
        width: 30vw;
    }
    
    .panel {
        background-color: rgba(85, 114, 104, 0.6);
        max-width: 100%;
        margin: clamp(2px, 1%, 1rem);
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        backdrop-filter: blur(4px);

        padding: clamp(2px, 1%, 8px);
        justify-content: center;
    }
    .panel button {
        margin-right: .4vw;
        cursor: pointer;
        font-size: 1rem;
        margin: auto;
        height: 90%;
        border: 2px solid rgba(0, 0, 0, 0.13);
        border-radius: 6px;

        //background-color: rgba(0, 0, 0, .2);
    }
    
    .bts {
        display: flex;
        justify-content: center;
        gap: .2rem;
    }

    input[type="checkbox"] {
        width: 3vw;
        height: 3vw;
    }
    .boxes {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 5px;
    }

    .box {
        transition: all .2s ease-in-out;
        text-decoration: solid underline transparent 2px;
    }
    .box:hover {
        text-decoration: solid underline #060c13 2px;
    }
    
    .galeria {
        margin: auto;
        padding-bottom: 5%;
        width: clamp(414px, 90%, 90rem);
        display: grid;
        column-gap: max(4px , .2%);
        row-gap: max(4px , .05%);
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 400px;
        grid-auto-flow: dense;
        justify-content: space-between;

        animation-name: load;
        animation-duration: .25s;
    }
    .pic {
        display: grid;
        background: no-repeat;
        background-color: bisque;
        background-size: cover;
        background-position: center;
        padding: .5%;

        transition: all .2s ease-in-out;
    }
    .pic:hover {
        transform: scale(1.05);
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @keyframes load {
        from {opacity: 20%; scale: .8;}
        to {opacity: 100%; scale: 1}
    }

    @media screen and (min-width: 720px) {
        .tall {
            grid-row: span 2 / auto;
        }
        .wide {
            grid-column: span 2 / auto;
        }
        .panel {
            position: sticky;
            top: 1vh; left: 0px;
            z-index: 2;
            max-width: fit-content;
            border-radius: 10px;
        }
        .boxes {
            flex-direction: row;
            align-items: center;
        }
        .panel button {
            height: auto;
        }
        .space {
            width: 10vw;
        }
        input[type="checkbox"] {
            width: 16px;
            height: 16px;
        }
    }
    .imgss-enter-active {
        transition: all 0.25s ease-out;
    }
    .imgss-leave-active {
        transition: all 0.2s ease-in-out;
    }

    .imgss-enter-from {
        opacity: .5;
    }
    .imgss-leave-to {
        opacity: 0;
        scale: .5;
    }

</style>