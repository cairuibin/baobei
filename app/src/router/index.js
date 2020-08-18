import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
            path: 'First',
            name: 'First',
            component: () =>
                import ('../views/First.vue')
            },
            {
                path: 'Number',
                name: 'Number',
                component: () =>
                    import ('../views/Number.vue')
            }, {
                path: 'TaskCenter',
                name: 'TaskCenter',
                component: () =>
                    import ('../views/TaskCenter.vue')
            },
            {
                path: 'EquipmentCenter',
                name: 'EquipmentCenter',
                component: () =>
                    import ('../views/EquipmentCenter.vue')
            },
            {
                path: 'EquipmentDetail',
                name: 'EquipmentDetail',
                component: () =>
                    import ('../views/EquipmentDetail.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
  
  