import { createRouter , createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../pages/login.vue";

import { auth } from "../store/auth.js";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authIs = auth()
    if (!authIs.isAuthenticated && to.meta.requiresAuth) {
        next({ name: 'Login' })
    } else if (authIs.isAuthenticated && to.path === '/login') {
        next({ name: 'Home' })
    } else {
        next()
    }
})