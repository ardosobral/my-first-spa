import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoopComponent from "./components/LoopComponent.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
