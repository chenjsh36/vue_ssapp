<template lang="jade">
    .ss-app
        //- 顶部栏
        nav.ss-topbar

        //- 路由渲染
        .ss-body.ss-float-container
            .col-xs-12
                router-view
        //- 底部栏
        nav.ss-bottombar.navbar.navbar-default.navbar-fixed-bottom.navbar-inverse
            .container
                ul.nav.navbar-nav
                    li.col-xs-3: a(v-link="{ path: '/home' }") 首页
                    li.col-xs-3: a(v-link="{ path: '/type' }") 分类
                    li.col-xs-3: a(v-link="{ path: '/hot' }") 热门
                    li.col-xs-3: a(v-link="{ path: '/user' }") 我
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
    @bodyColor: #a2a2a2;
    @bottombarHeight: 55px;
    @topbarHeight: 40px;
    
    @topbarZIndex: 1030;
    body {
        background-color: @bodyColor;
    }
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
            padding-bottom: @bottombarHeight;
        }
        // 撑起body的高度
        .ss-float-container {
             &:before {
                content: '';
                display: table;
            }
            &:after {
                content: '';
                display: table;
                clear: both;
            }           
        }
        // 占满屏幕的容器
        .ss-fixed-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fff;
            z-index: @topbarZIndex + 1;
            .ss-topbar {
                position: relative;
                width: 100%;
                height: 32px;
                line-height: 32px;
                background-color: #00ff00;
                text-align: center;
                .back-item {
                    position: absolute;
                    left: 0;
                    top: 1px;
                    height: 30px;
                    width: 30px;
                    border: 1px solid white;
                }
                .title {

                }
            }

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