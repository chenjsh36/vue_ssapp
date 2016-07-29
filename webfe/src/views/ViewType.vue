<template lang="jade">
    comp-article-types(:test="msg", :articletypes="share_data.articletypes")
</template>

<script>
    import CompArticleTypes from './../components/CompArticleTypes.vue'

    export default {
        data() {
            return {
                msg: 'I am view type',
                name: 'ViewType',
                share_data: {
                    articletypes: {}
                }
            }
        },
        components: {
            CompArticleTypes
        },
        // 生命周期函数
        created: function() {
            console.log('Created: name is ', this.name);
        },        
        compiled: function() {
            console.log('Compiled: name is ', this.name);
        },
        ready: function() {
            this.$http.get('http://192.168.1.60:9001/articles/articletypes/').then((response) => {
                // success callback
                let json_res = response.json()

                if (json_res.status !== 200) {
                    this.articletypes_empty()
                }
                let article_types = json_res.data.article_types
                this.articletypes_set(article_types)
            }, () => {
                // error callback
                this.articletypes_empty()
            });
        },
        destroyed: function() {
            console.log('Destroyed: name is ', this.name);
        },
        methods: {
            articletypes_set: function(article_types) {
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
            articletypes_empty: function() {
                this.share_data.article_types = {}
            }
        }
    }
</script>