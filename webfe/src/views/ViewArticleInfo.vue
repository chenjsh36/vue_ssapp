<template lang="jade">
    .ss-articleinfo-container
        comp-article-view(:selected_article="share_data.selected_article" v-on:child-gocollect="tocollect")
        comp-alert(:show.sync="share_data.show_alert")
            h3(slot="header") {{share_data.header_alert}}
            p(slot="body") {{share_data.body_alert}} 

</template>
<script>
    import CompArticleView from '../components/CompArticleView.vue'
    import CompAlert from '../components/CompAlert.vue'

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
                    },
                    show_alert: false,
                    body_alert: '默认',
                    header_alert: '提示'
                }
            }
        },
        components: {
            CompArticleView,
            CompAlert
        },
        methods: {
            tocollect: function(id) {
                console.log('to collect: ', id, this.share_data.show_alert);
                this.share_data.header_alert = '提示';
                this.share_data.body_alert = '您还没有登录，请登录后收藏！';
                this.share_data.show_alert = true;

            }
        },
        events: {

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