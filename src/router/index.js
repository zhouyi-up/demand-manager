import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/index'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path:'/',
        component: ()=> import('../views/login')
    },{
        path:'/login',
        component: ()=> import('../views/login')
    },{
        path: '/regEdit',
        component: () => import('../views/regEdit')
    },{
        path: '/main',
        component: layout,
        children:[{
            path: '',
            component: () => import('../views/main')
        },{
            path: 'uploadDemand',
            component: () => import('../views/uploadDemand')
        },{
            path: 'projectForWo',
            component: () => import('../views/project')
        }]
    }]
})

export default router;
