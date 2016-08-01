import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import SSApp from './SSApp.vue'
import ViewHome from './Views/ViewHome.vue'
import ViewType from './Views/ViewType.vue'
import ViewHot from './Views/ViewHot.vue'
import ViewUserBase from './Views/ViewUserBase.vue'
import ViewUser from './Views/ViewUser.vue'
import ViewUserLogin from './Views/ViewUserLogin.vue'
import ViewUserReg from './Views/ViewUserReg.vue'
import ViewArticleInfo from './views/ViewArticleInfo.vue'
import ViewArticleOfType from './views/ViewArticleOfType.vue'
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
        component:  ViewUserBase,
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
    }, 
    '/articleinfo/:art_id': {
        component: ViewArticleInfo
    },
    '/articlesoftype/:type_id': {
        component: ViewArticleOfType
    }
})

router.redirect({
    '*': '/home'
})

router.start(SSApp, '#ss-app')

// 前置钩子
// router.beforeEach(function({to, next}) {
    // if (to.path === '/home') {
    //     document.querySelector('.ss-app > .ss-topbar .title').innerText = '首页'
    // } else if (to.path === '/type') {
    //     document.querySelector('.ss-app > .ss-topbar .title').innerText = '分类'
    // } else if (to.path === '/hot') {
    //     document.querySelector('.ss-app > .ss-topbar .title').innerText = '热门'
    // } else if ( /^\/user/.test(to.path) === true) {
    //     document.querySelector('.ss-app > .ss-topbar .title').innerText = '个人中心'
    // }
//     next()
// })