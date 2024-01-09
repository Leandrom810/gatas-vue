import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import Home from './views/Home.vue'
import Galeria from './views/Galeria.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/gatas-vue', redirect: '/'},
        {path: '/gatas-vue/galeria', component: Galeria},
        {path: '/galeria', redirect: '/gatas-vue/galeria'},
    ],
})

const app = createApp(App);
app.use(router);
app.mount('#app');

