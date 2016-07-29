<template lang="jade">
    .ss-app
        //- 顶部栏
        nav.ss-topbar

        //- 路由渲染
        .ss-body.container
            .col-xs-12
                router-view
        //- 底部栏
        nav.ss-bottombar.navbar.navbar-default.navbar-fixed-bottom.navbar-inverse
            .container
                ul.nav.navbar-nav
                    li.col-xs-3: a(v-link="{ path: '/home' }") 首页
                    li.col-xs-3: a(v-link="{ path: '/type' }") 分类
                    li.col-xs-3: a(v-link="{ path: '/type' }") 热门
                    li.col-xs-3: a(v-link="{ path: '/type' }") 我
</template>
    
<script>
    // import CompSidebar from './components/CompSidebar.vue'
    import CompArticleList from './components/CompArticleList.vue'
    export default {
        data () {
            return {
                msg: 'chenjsh',
                user: {
                    name: 'chenjsh36'
                }
            }
        },
        // replace: false,
        components: {
            // CompSidebar,
            CompArticleList
        }
    }

</script>

<style lang="less">
    @colorBlack: #000;
    
    @bottombarHeight: 55px;
    @topbarHeight: 40px;
    
    @topbarZIndex: 1030;
    .ss-app {
        .ss-bottombar {
            height: @bottombarHeight;
            a {
                padding-right: 0;
                padding-left: 0;
                fons-size: 12px;
                text-align: center;
            }
        }
        .ss-body {

            position: relative;
            padding-top: @topbarHeight;
        }
        .ss-topbar {
            position: fixed;
            width: 100%;
            height: @topbarHeight;
            background-color: @colorBlack;
            z-index: @topbarZIndex;
        }
    }

</style>