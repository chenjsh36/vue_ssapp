<template lang="jade">
        //- 顶部栏
        nav.ss-topbar 
            .back-item.glyphicon.glyphicon-circle-arrow-left(v-on:click="goBack" v-if="back")
            .title {{title}}
            
        .ss-topbar-zanwei
</template>
<script>
    export default {
        data () {
            return {        
                msg: 'I am topbar ',
                name: 'CompTopbar'
            }
        },
        props: ['title', 'back'],
        methods: {
            goBack: function() {
                window.history.back()
            }
        }
    }
</script>
<style lang="less">
    @colorBlack: #000;
    @bodyColor: #a2a2a2;

    @topbarZIndex: 1030;
    @topbarHeight: 45px;
    .transition-func {
        -webkit-transition: .2s all;
        -moz-transition: .2s all;
        -ms-transition: .2s all;
        transition: .2s all;
    }
    .ss-topbar {
        position: fixed;
        width: 100%;
        height: @topbarHeight;
        line-height: @topbarHeight;
        background-color: @colorBlack;
        z-index: @topbarZIndex;
        text-align: center;
        .back-item {
            color: #fff;
            position: absolute;
            left: 5px;
            top: (@topbarHeight - 30px) / 2;
            font-size: 30px;
            .transition-func();
            &:hover {
                color: rgba(255, 255, 255, .8);
            }
        }
        .title {
            color: #fff;
            font-size: 16px;
        }
    }
    .ss-topbar-zanwei {
        height: @topbarHeight;
    }
</style>