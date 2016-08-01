<template lang="jade">
    .ss-viewtype-container
        comp-topbar(:title="title")
        comp-article-types(:test="msg", :articletypes="share_data.articletypes" v-on:child-selecttype="showArticleOfType")
        comp-bottombar


</template>

<script>
    import CompTopbar from './../components/CompTopbar.vue'
    import CompBottombar from './../components/CompBottombar.vue'
    import CompArticleTypes from './../components/CompArticleTypes.vue'

    export default {
        data() {
            return {
                msg: 'I am view type',
                name: 'ViewType',
                title: '分类',
                share_data: {
                    articletypes: {}
                }
            }
        },
        components: {
            CompTopbar,
            CompBottombar,
            CompArticleTypes,

        },
        // 生命周期函数
        created: function() {
        },        
        compiled: function() {
        },
        ready: function() {
            this.$http.get('http://192.168.1.60:9001/articles/articletypes/').then((response) => {
                // success callback
                let json_res = response.json()

                if (json_res.status !== 200) {
                    this.articletypesEmpty()
                    return
                }
                let article_types = json_res.data.article_types
                this.articletypesSet(article_types)
            }, () => {
                // error callback
                this.articletypesEmpty()
            });
        },
        destroyed: function() {
        },
        methods: {
            articletypesSet: function(article_types) {
                let sort_article_types = {}
                for (let i = 0, len = article_types.length; i < len; i++) {
                    let article_type_tmp = article_types[i],
                        first_type_tmp = article_type_tmp.first_type,
                        sec_type_tmp = article_type_tmp.sec_type,
                        id = article_type_tmp.id
                        ;

                    if (sort_article_types[first_type_tmp]) {
                        sort_article_types[first_type_tmp].push({
                            name: sec_type_tmp,
                            id: id
                        })
                    } else {
                        sort_article_types[first_type_tmp] = [{
                            name: sec_type_tmp,
                            id: id
                        }]
                    }
                }
                this.share_data.articletypes = sort_article_types
            },
            articletypesEmpty: function() {
                this.share_data.article_types = {}
            },
            showArticleOfType: function(id) {
                console.log('to show article of type: ', id);
                this.$router.go('/articlesoftype/' + id);
            }
        }
    }
</script>

<style lang="less">
    
</style>