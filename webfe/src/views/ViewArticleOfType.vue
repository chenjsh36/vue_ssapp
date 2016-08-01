<template lang="jade">
    .ss-articleoftype-container(v-show="show" transition="ss")
        comp-topbar(:title="title" back="true")
        comp-article-list(:articlelist="share_data.type_article", :test="msg", v-on:child-selectarticle="showarticle")
</template>
<script>
    import CompTopbar from './../components/CompTopbar.vue'
    import CompArticleList from './../components/CompArticleList.vue'

    export default {
        data () {
            return {
                msg: 'I am articleoftype',
                title: '分类',
                show: true,
                share_data: {
                    type_article: [{
                        id: 1,
                        title: '今年最火的动漫',
                        name: '在下版本，有何贵干',
                        img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                        content: '非常搞笑的动漫',
                        type: ['搞笑', '校园', '感动'],
                        actors: ['版本'],
                        director: '导演',
                        company: '中北明',
                        evaluate: 99,
                        publish_time: '2016-7-30',
                        relative_img: ['http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg']
                    },]
                }
            }
        },
        components: {
            CompTopbar,
            CompArticleList,
        },
        methods: {
            showarticle: function(art) {
                this.$router.go('/articleinfo/' + art.id)
            }
        }
    }
</script>
<style lang="less">
    .ss-articleoftype-container {
        position: absolute;
    }
</style>