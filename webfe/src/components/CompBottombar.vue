<template lang="jade">
        //- 底部栏
        .ss-bottombar-zanwei
        nav.navbar.navbar-default.navbar-fixed-bottom.navbar-inverse.ss-bottombar
            .container
                ul.nav.navbar-nav
                    li.col-xs-3: a(v-link="{ path: '/home' }") 首页
                    li.col-xs-3: a(v-link="{ path: '/type' }") 分类
                    li.col-xs-3: a(v-link="{ path: '/hot' }") 热门
                    li.col-xs-3: a(v-link="{ path: '/user' }") 我

</template>
<script>
    export default {
        data () {
            return {        
                msg: 'I am bottombar ',
                name: 'CompBottombar'
            }
        },
    }
</script>
<style lang="less">
    @bottombarHeight: 55px;
    @bottomBackColor: #000;
    .ss-bottombar {
        height: @bottombarHeight;
        li > a {
            padding-right: 0;
            padding-left: 0;
            fons-size: 12px;
            text-align: center;
        }
    }
    .ss-bottombar-zanwei {
        height: @bottombarHeight;
    }
</style>