<template lang="jade">
.ss-article-list
    .ss-article-item(v-for="art in articlelist")
        div(v-on:click="showArticleInfo(art.id)")
            .col-xs-9
                .ss-article-item-info
                    h3.title {{art.title}}
                    p.content {{art.content}}
            .col-xs-3        
                .ss-article-item-img
                    img(v-bind:src="art.img")

//- comp-article-view(:selected_article="share_data.selected_article")
</template>

<script>
    // import CompArticleView from './CompArticleView.vue'

    export default {
        data () {
            return {
                msg: 'I am CompoAriticleList',
                name: 'CompoAriticleList',
                share_data: {
                    // selected_article: {
                    //         id: 1,
                    //         title: '今年最火的动漫',
                    //         name: '在下版本，有何贵干',
                    //         img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                    //         content: '非常搞笑的动漫',
                    //         type: ['搞笑', '校园', '感动'],
                    //         actors: ['版本'],
                    //         director: '导演',
                    //         company: '中北明',
                    //         evaluate: 99,
                    //         publish_time: '2016-7-30',
                    //         relative_img: ['http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg']
                    //     },
                }
            }
        },
        props: ['articlelist', 'test'],
        components: {
            // CompArticleView
        },
        ready: function() {
            console.log('article-list:', this.props, this);
        },
        methods: {
            showArticleInfo: function(id) {
                console.log(id);
                for (let i = 0, len = this.articlelist.length; i < len; i++) {
                    if (this.articlelist[i].id === id) {
                        this.share_data.selected_article = this.articlelist[i]
                        break;
                    }
                }
                if (this.share_data.selected_article) {
                    console.log('to dispatch event')
                    this.$dispatch('child-selectarticle', this.share_data.selected_article)
                }
            }
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
            background-color: #fff;
            &:before {
                content: '';
                display: table;
            }
            &:after {
                content: '';
                display: table;
                clear: both;
            }
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