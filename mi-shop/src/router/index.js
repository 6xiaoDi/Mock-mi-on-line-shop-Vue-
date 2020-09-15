import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Register from '../views/register'
import Login from  "../views/login"
import Index from '../views/index'
import Product from '../views/product'
import Detail from '../views/detail'
import Cart from '../views/cart'
import Order from '../views/order'
import OrderList from '../views/orderList'
import OrderConfirm from  '../views/orderConfirm'
import OrderPay from "../views/orderPay";
import Alipay from "../views/aliPay"

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
                component: Product
            }, {
                path: 'detail/:id',
                name: 'detail',
                component: Detail
            },
        ]
    },
    {
        path: '/login',
        name:'login',
        component: Login
    },
    {
        path: '/register',
        name:'register',
        component: Register
    },
    {
        path: '/cart',
        name:'cart',
        component: Cart
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList
            }, {
                path: 'confirm',
                name: 'order-confirm',
                component: OrderConfirm
            }, {
                path: 'pay',
                name: 'order-pay',
                component: OrderPay
            }, {
                path: 'alipay',
                name: 'alipay',
                component: Alipay
            }
        ]
    }
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router
