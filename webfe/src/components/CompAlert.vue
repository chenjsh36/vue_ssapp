<template lang="jade">
    .ss-alert-mask(v-show="show" transition="ss-alert")
        .ss-alert-wrapper
            .ss-alert-container
                .ss-alert-header
                    slot(name="header") default header
                .ss-alert-body
                    slot(name="body") default body
                .ss-alert-footer
                    slot(name="footer") 
                        button.btn.btn-default.ss-alert-btn(v-on:click="cancelAlert") 确定
</template>
<script>
    export default {
        data () {
            return {
                msg: 'I am CompAlert',
                name: 'CompAlert'
            }
        },
        props: {
            show: {
                type: Boolean,
                required: true,
                twoWay: true
            }
        },
        methods: {
            cancelAlert: function() {
                console.log('cancel');
                this.show = false;
            }
        }
    }
</script>
<style lang="less">
    @topbarZIndex: 1030;
        
    // 出现和消失的动画
    .ss-alert-transition {
        transition: all .2s ease;
        transform: translate(0,0);
    }
    .ss-alert-enter,
    .ss-alert-leave {
        opacity: 0;
    }
    .ss-alert-enter .ss-alert-container,
    .ss-alert-leave .ss-alert-container {
        transform: scale(1.1);
    }
    
    .ss-alert-mask {
        position: fixed;
        z-index: @topbarZIndex + 2;
        top: 0;
        left: 0;
        // right: 0;
        // bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity .3s ease;

        .ss-alert-wrapper {
            display: table-cell;
            vertical-align: middle;
        
            .ss-alert-container {
                width: 300px;
                margin: 0px auto;
                padding: 20px 30px;
                background-color: #fff;
                border-radius: 2px;
                transition: all .3s ease;
            }
        }
        .ss-alert-header {
            color: #42b983;
        }
        .ss-alert-body {
            margin: 20px 0;
        }
        .ss-alert-footer {
            &:before {
                content: '';
                display: table;
                clear: both;
            }
            &:after {
                content: '';
                display: table;
                clear: both;
            }
        }
        .ss-alert-btn {
            float: right;
        }
    }
</style>