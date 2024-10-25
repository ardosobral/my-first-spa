import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoopComponent from "./components/LoopComponent.vue";
import FetchNaruto from "./components/FetchNaruto.vue";
import NarutoDetail from "./components/NarutoDetail.vue";

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
    },
    {
        path: '/naruto/:id', 
        name: 'NarutoDetail',
        component: NarutoDetail,
        props: true             
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;