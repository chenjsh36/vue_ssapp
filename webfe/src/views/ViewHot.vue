<template lang="jade">
    .ss-viewhot-container
        comp-topbar(:title="title")
        comp-article-list(:articlelist="share_data.hot_articles", :test="msg", v-on:child-selectarticle="showarticle")
        comp-bottombar
</template>

<script>
    import CompTopbar from './../components/CompTopbar.vue'
    import CompArticleList from './../components/CompArticleList.vue'
    import CompBottombar from './../components/CompBottombar.vue'
    export default {
        data() {
            return {
                msg: 'I am view home',
                name: 'ViewHome',
                title: '热门',
                share_data: {
                    hot_articles: [
                    ],
                    // selected_article: {
                    //     id: 1,
                    //     title: '今年最火的动漫',
                    //     name: '在下版本，有何贵干',
                    //     img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                    //     content: '非常搞笑的动漫',
                    //     type: ['搞笑', '校园', '感动'],
                    //     actors: ['版本'],
                    //     director: '导演',
                    //     company: '中北明',
                    //     evaluate: 99,
                    //     publish_time: '2016-7-30',
                    //     relative_img: ['http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg']
                    // },
                },

            }
        },
        components: {
            CompTopbar,
            CompArticleList,
            CompBottombar
        },
        // 生命周期函数
        created: function() {
        },        
        compiled: function() {
        },
        ready: function() {
            this.$http.get('http://192.168.1.60:9001/articles/hotarticles/').then((response) => {
                // success callback
                let json_res = response.json()
                if (json_res.status !== 200) {
                    this.share_data.hot_articles = []
                }
                this.share_data.hot_articles = json_res.data.hot_articles
            }, () => {
                // error callback
                this.share_data.hot_articles = []
            });
        },
        destroyed: function() {
            console.log('Destroyed: name is ', this.name);
        },
        methods: {
            showarticle: function(art) {
                this.$router.go('/articleinfo/' + art.id)
            }
        }
    }
</script>

<style lang="less">
    .article-view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        z-index: 1031;
        .topbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 30px;

            z-index: 1031;
            background-color: white;
        }
        .content {
            position: relative;
            height: 1200px;
            width: 100%;
            background-color: #111;

            color: white;
        }
        .bottombar {
            z-index: 1031;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30px;
            background-color: white;

        }
    }
</style>