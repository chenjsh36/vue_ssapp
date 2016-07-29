<template lang="jade">
    comp-article-list(:articlelist="share_data.hot_articles", :test="msg")
</template>

<script>
    import CompArticleList from './../components/CompArticleList.vue'

    export default {
        data() {
            return {
                msg: 'I am view home',
                name: 'ViewHome',
                share_data: {
                    hot_articles: [
                    ]
                }
            }
        },
        components: {
            CompArticleList
        },
        // 生命周期函数
        created: function() {
            console.log('Created: name is ', this.name);
        },        
        compiled: function() {
            console.log('Compiled: name is ', this.name);
        },
        ready: function() {
            console.log('Ready: name is ', this.name);
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
        }
    }
</script>