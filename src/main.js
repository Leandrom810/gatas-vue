import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import Home from './views/Home.vue'
import Galeria from './views/Galeria.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/galeria', component: Galeria},
    ],
})

const app = createApp(App);
app.use(router);
app.mount('#app');

