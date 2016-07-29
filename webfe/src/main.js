import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import SSApp from './SSApp.vue'
import ViewHome from './Views/ViewHome.vue'
import ViewType from './Views/ViewType.vue'

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
    }
})

router.redirect({
    '*': '/home'
})

router.start(SSApp, '#ss-app')