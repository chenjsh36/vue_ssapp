<template lang="jade">
.ss-article-list
    .ss-article-item.row(v-for="art in articlelist")
        .col-xs-9
            .ss-article-item-info
                h3.title {{art.title}}
                p.content {{art.content}}
        .col-xs-3        
            .ss-article-item-img
                img(v-bind:src="art.img")        
</template>

<script>
    export default {
        data () {
            return {
                msg: 'I am CompoAriticleList',
                name: 'CompoAriticleList'
            }
        },
        props: ['articlelist', 'test'],
        ready: function() {
            console.log('article-list:', this.props, this);
        }

    }
</script>

<style lang="less">
    @articleItemHeight: 60px;
    .ss-article-list {
        position: relative;

        .ss-article-item {
            position: relative;
            padding: 10px 0;
            border-bottom: 1px solid #aaa;
            .ss-article-item-info {
                height: @articleItemHeight;

                .title {
                    margin-top: 0px;
                    font-size: 16px;
                }
                .content {
                    font-size: 14px;
                }
            }
            .ss-article-item-img {
                position: relative;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                height: @articleItemHeight;
                overflow: hidden;
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
</style>