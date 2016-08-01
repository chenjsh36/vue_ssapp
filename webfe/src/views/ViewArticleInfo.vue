<template lang="jade">
    comp-article-view(:selected_article="share_data.selected_article")

</template>
<script>
    import CompArticleView from '../components/CompArticleView.vue'

    export default {
        data () {
            return {
                msg: 'I am view article info',
                name: 'ViewArticleInfo',
                share_data: {
                    selected_article: {
                            id: 1,
                            title: '--',
                            name: '--',
                            img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                            content: '--',
                            type: ['--'],
                            actors: ['--'],
                            director: '--',
                            company: '--',
                            evaluate: 100,
                            publish_time: 'YYYY-MM-DD',
                            relative_img: ['http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg', 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg']
                    }
                }
            }
        },
        components: {
            CompArticleView
        },
        ready: function() {
            setTimeout((function(){
                let art = this.share_data.selected_article
                art.id = 2;
                art.title = '今年最火的动漫';
                art.name = '在下版本，有何贵干';
                art.img = 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg';
                art.content = '非常搞笑的动漫';
                art.type =  ['搞笑', '校园', '感动'];
                art.actors = ['版本'];
            }).bind(this), 3000)
        }
    }
</script>