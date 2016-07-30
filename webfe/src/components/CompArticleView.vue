<template lang="jade">
    .ss-fixed-container.ss-fixed-right(v-show="show" transition="ss")
        .ss-topbar
            .back-item.glyphicon.glyphicon-circle-arrow-left(v-on:click="goBack")
            .title 文章       
        .ss-articleinfo-container
            .ss-articleinfo-img
                img(v-bind:src="selected_article.img")
            .ss-articleinfo-img
                img(v-bind:src="selected_article.img")
            .ss-articleinfo-img
                img(v-bind:src="selected_article.img")
            .ss-articleinfo-words
                .ss-articleinfo-title {{selected_article.title}}
                    
                .ss-articleinfo-publish {{selected_article.publish_time}}
                .ss-articleinfo-content {{selected_article.content}}
                .ss-articleinfo-types
                    .ss-articleinfo-types-item(v-for="type in selected_article.type")
                        span {{type}}

        .ss-fixed-bottombar
            .col-xs-6.ss-user-collect 收藏
            .col-xs-6.ss-user-getss 资源
                
</template>
<script>
    import SS from '.././common/ssquery.js'

    export default {
        data() {
            return {
                msg: 'I am CompArticleView',
                name: 'CompArticleView',
                show: true,
            }
        },
        props: ['selected_article'],
        ready: function() {
            console.log('CompArticleView ready!')
        },
        methods: {
            goBack: function() {
                SS.addClass(this.$el, 'ss-fixed-right')
            }
        },
        events: {
            // 监听到父组件广播的事件
            'selected_article_event': function() {

                SS.removeClass(this.$el, 'ss-fixed-right')
            }
        }
    }
</script>
<style lang="less">
    .ss-articleinfo-container {
        position: relative;
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
        padding: 10px 0;
        background-color: #00ff00;
        color: #fff;
    }
    .ss-user-getss {
        padding: 10px 0;
        background-color: #ff0000;
        color: #fff;
    }
</style>