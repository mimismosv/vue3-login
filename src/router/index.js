import { createWebHistory, createRouter } from 'vue-router';
import Promotions from '@/views/Promotions.vue'
import Admin from '@/views/Admin.vue'
import Products from '@/views/products.vue'

const routes = [
    {
        path: '/Admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/Promotions',
        name: 'Promotions',
        component: Promotions
    },
    {
        path: '/',
        name: 'Products',
        component: Products
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;