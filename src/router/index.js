import { createWebHistory, createRouter } from 'vue-router';
import People from '@/views/people.vue'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Cities from '@/views/cities.vue'

const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/People',
        name: 'People',
        component: People
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Cities',
        name: 'Cities',
        component: Cities
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;