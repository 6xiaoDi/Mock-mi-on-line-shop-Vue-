import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Index from '../views/index'


Vue.use(VueRouter) // 加载插件

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect:'/index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: Index
            }, {
                path: 'product/:id',
                name: 'product',
                component: () => import('../views/product.vue')
            }, {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('../views/detail.vue')
            },
        ]
    },
    {
        path: '/login',
        name:'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/register',
        name:'register',
        component: () => import('../views/register.vue')
    },
    {
        path: '/cart',
        name:'cart',
        component: () => import('../views/cart.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue'),
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: () => import('../views/orderList.vue')
            }, {
                path: 'confirm',
                name: 'order-confirm',
                component: () => import('../views/orderConfirm.vue')
            }, {
                path: 'pay',
                name: 'order-pay',
                component: () => import('../views/orderPay.vue')
            }, {
                path: 'alipay',
                name: 'alipay',
                component: () => import('../views/aliPay.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
