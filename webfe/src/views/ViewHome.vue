<template lang="jade">
    .ss-viewhome-container
        comp-topbar(:title="title")
        comp-article-list(:articlelist="share_data.last_articles", :test="msg", v-on:child-selectarticle="showarticle")
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
                title: '首页',
                share_data: {
                    last_articles: [
                    ]
                }
            }
        },
        components: {
            CompTopbar,
            CompArticleList,
            CompBottombar
        },
        // 生命周期函数
        created: function() {
            console.log('Created: name is ', this.name);
        },        
        compiled: function() {
            console.log('Compiled: name is ', this.name);
        },
        ready: function() {
            this.$http.get('http://192.168.1.60:9001/articles/lastarticles/').then((response) => {
                // success callback
                let json_res = response.json()
                if (json_res.status !== 200) {
                    this.share_data.last_articles = []
                }
                this.share_data.last_articles = json_res.data.last_articles
            }, () => {
                // error callback
                this.share_data.last_articles = []
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