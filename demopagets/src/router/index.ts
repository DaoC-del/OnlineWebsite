import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    //   styles of buttons
    {
        path: '/buttonStyles',
        name: 'buttonStyles',
        component: () => import('../components/gsap/buttonStyles.vue')
    },
    //common component 's parameter binding
    {
        path: '/ChildTemplate',
        name: 'ChildTemplate',
        component: () => import('../components/ChildTemplate.vue')
    },
    //checkbox group
    {
        path: '/CheckboxGroup',
        name: 'CheckboxGroup',
        component: () => import('../components/gsap/CheckboxGroup.vue')
    },

    //particleJS
    {
        path: '/particleJS',
        name: 'particleJS',
        component: () => import("../components/gsap/ParticleJS.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
