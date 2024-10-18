import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoopComponent from "./components/LoopComponent.vue";
import FetchNaruto from "./components/FetchNaruto.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/loop',
        name: 'Loop',
        component: LoopComponent
    },
    {
        path: '/naruto',
        name: 'Naruto',
        component: FetchNaruto
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;