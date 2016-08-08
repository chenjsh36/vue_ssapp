<template lang="jade">
    .ss-app
        router-view(:auth="share_data.auth")
</template>
    
<script>
    window.auth = {
        is_login: false,
        user: 'chenjsh36',

    }
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
        components: {
        }
    }

</script>

<style lang="less">
    @colorBlack: #000;
    @bodyColor: #a2a2a2;
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
        position: relative;
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


        // 占满屏幕的容器
        .ss-fixed-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fff;
            z-index: @topbarZIndex + 1;
            .ss-fixed-bottombar {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                text-align: center;
            }
        }  
        .ss-fixed-right {
            transform: translate(100%,0);
        }
    }

</style>