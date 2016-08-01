<template lang="jade">
    .ss-fixed-container.ss-artview-container(v-show="show" transition="ss")
        comp-topbar(:title="title" back="true")
        .ss-articleinfo-container
            .ss-articleinfo-img
                img(v-bind:src="selected_article.img")

            .ss-articleinfo-words
                .ss-articleinfo-title {{selected_article.title}}
                    
                .ss-articleinfo-publish {{selected_article.publish_time}}
                .ss-articleinfo-content {{selected_article.content}}
                .ss-articleinfo-types
                    .ss-articleinfo-types-item(v-for="type in selected_article.type")
                        span {{type}}

        .ss-bottombar
            .col-xs-6.ss-user-collect 收藏
            .col-xs-6.ss-user-getss 资源
                
</template>
<script>
    import CompTopbar from './CompTopbar.vue'
    export default {
        data() {
            return {
                msg: 'I am CompArticleView',
                name: 'CompArticleView',
                show: true,
                title: '文章'
            }
        },
        props: ['selected_article'],
        components: {
            CompTopbar
        },
        ready: function() {
            console.log('CompArticleView ready!')
        },
        methods: {
            goBack: function() {
                window.history.back()
            }
        },
        events: {
            // 监听到父组件广播的事件
            'selected_article_event': function() {

                // SS.removeClass(this.$el, 'ss-fixed-right')
            }
        }
    }
</script>
<style lang="less">
    @colorBlack: #000;
    @bodyColor: #a2a2a2;
    @topbarZIndex: 1030;
    @topbarHeight: 40px;
    .ss-artview-container {
        .transition-func {
            -webkit-transition: .2s all;
            -moz-transition: .2s all;
            -ms-transition: .2s all;
            transition: .2s all;
        }
        .ss-topbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: @topbarHeight;
            line-height: @topbarHeight;

            z-index: @topbarZIndex + 1;
            background-color: #000;
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
            }
        }
        .ss-bottombar {
            z-index: 1031;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: @topbarHeight;
            background-color: white;
            line-height: @topbarHeight;
        }    
        .ss-articleinfo-container {
            position: absolute;
            top: @topbarHeight;
            bottom: @topbarHeight;
            overflow: scroll;
            .ss-articleinfo-img {
                position: relative;
                height: 300px;
                width: 100%;
                overflow: hidden;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .ss-articleinfo-words {
                position: relative;
                padding: 13px 10px;
                .ss-articleinfo-title {
                    font-size: 16px;
                    font-weight: 800;
                    margin-bottom: 10px;
                }
                .ss-articleinfo-publish {
                    font-size: 12px;
                    color: gray;

                }
                .ss-articleinfo-content {
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                .ss-articleinfo-types {
                    position: relative;
                    .ss-articleinfo-types-item {
                        position: relative;
                        display: inline-block;
                        
                        margin: 0 10px 0 0;
                        padding: 3px 4px;

                        border-radius: 5px;
                        background-color: #eee;

                        font-size: 12px;
                        color: gray;

                    }
                }
            }
        }
        .ss-user-collect {
            background-color: #00ff00;
            color: #fff;
            text-align: center;
        }
        .ss-user-getss {
            background-color: #ff0000;
            color: #fff;
            text-align: center;
        }
    }

</style>