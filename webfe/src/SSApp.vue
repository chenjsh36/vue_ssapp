<template lang="jade">
    .ss-app
        //- 顶部栏
        nav.ss-topbar 
            .title 首页

        //- 路由渲染
        .ss-body.ss-float-container
            .col-xs-12
                router-view(:auth="share_data.auth")
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
    window.auth = {
        is_login: false,
        user: 'chenjsh36',

    }
    // import CompSidebar from './components/CompSidebar.vue'
    // import CompArticleList from './components/CompArticleList.vue'
    export default {
        data () {
            return {
                msg: 'chenjsh',
                user: {
                    name: 'chenjsh36'
                },
                share_data: {
                    auth: window.auth   
                }
            }
        },
        // replace: false,
        components: {
            // CompSidebar,
            // CompArticleList
        }
    }

</script>

<style lang="less">
    @colorBlack: #000;
    @bodyColor: #a2a2a2;
    @bottombarHeight: 55px;
    @topbarHeight: 40px;
    
    @topbarZIndex: 1030;

    .transition-func {
        -webkit-transition: .2s all;
        -moz-transition: .2s all;
        -ms-transition: .2s all;
        transition: .2s all;
    }

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
                height: @topbarHeight;
                line-height: @topbarHeight;
                background-color: @colorBlack;
                text-align: center;
                color: #fff;
                .back-item {
                    position: absolute;
                    left: 5px;
                    top: (@topbarHeight - 30px) / 2;
                    // height: 30px;
                    // width: 30px;
                    // border: 1px solid white;
                    // border-radius: 50%;
                    font-size: 30px;
                    .transition-func();
                    &:hover {
                        color: rgba(255, 255, 255, .8);
                    }
                }
                // .title {

                // }
            }
            .ss-fixed-bottombar {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                text-align: center;
            }
        }  
        .ss-absolute-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: @topbarZIndex + 1;
        }
        .ss-topbar {
            position: fixed;
            width: 100%;
            height: @topbarHeight;
            line-height: @topbarHeight;
            background-color: @colorBlack;
            z-index: @topbarZIndex;
            text-align: center;
            .title {
                color: #fff;
                font-size: 16px;
            }
        }
        // 组件过渡动画
        /* 必需 */
        .ss-transition {
            transition: all .2s ease;
            transform: translate(0,0);
        }

        /* .ss-enter 定义进入的开始状态 */
        /* .ss-leave 定义离开的结束状态 */
        .ss-enter, .ss-leave {
            transform: translate(100%, 0);
            opacity: 0;
        }
        .ss-fixed-right {
            transform: translate(100%,0);
        }
    }

</style>