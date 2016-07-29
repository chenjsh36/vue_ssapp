import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import SSApp from './SSApp.vue'
import ViewHome from './Views/ViewHome.vue'
import ViewType from './Views/ViewType.vue'
import ViewHot from './Views/ViewHot.vue'
import ViewUser from './Views/ViewUser.vue'
import ViewUserLogin from './Views/ViewUserLogin.vue'
import ViewUserReg from './Views/ViewUserReg.vue'
// new Vue({
//     el: 'body',
//     components: { SSApp }
// })

// 注册两个插件
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()
// 路由map
router.map({
    '/home': {
        component: ViewHome
    },
    '/type': {
        component: ViewType
    },
    '/hot': {
        component: ViewHot
    },
    '/user': {
        component: {
            template: '<router-view></router-view>'
        },
        subRoutes: {
            '/': {
                component: ViewUser
            },
            '/login': {
                component: ViewUserLogin
            },
            '/reg': {
                component: ViewUserReg
            }
        }
    }
})

router.redirect({
    '*': '/home'
})

router.start(SSApp, '#ss-app')