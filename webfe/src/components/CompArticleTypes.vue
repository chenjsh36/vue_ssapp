<template lang="jade">
    .ss-article-types
        .ss-article-type-item(v-for="(key, val) in articletypes")
            .ss-article-type-item-title
                span {{key}}
            .ss-article-type-item-sublist
                span.label.label-default.ss-article-type-item-sublist-title(v-for="obj in val" v-on:click="selectType(obj.id)") {{obj.name}}    
</template>

<script>
    export default {
        data () {
            return {
                msg: 'I am CompArticleTypes',
                name: 'CompArticleTypes'
            }
        },
        props: ['articletypes', 'test'],
        ready: function() {
            console.log('articletypes:', this.props, this);
        },
        methods: {
            selectType: function(id) {
                console.log('select type: ', id);
                this.$dispatch('child-selecttype', id)
            }
        }
    }
</script>

<style lang="less">
    @primaryColor: #337ab7;
    @successColor: #5cb85c;
    @infoColor: #5bc0de;
    @warningColor: #f0ad4e;
    @dangerColor: #d9534f;
    .ss-article-types {

        .ss-article-type-item {
            // padding-top: 15px;
            padding: 15px 10px;   
        }
        .ss-article-type-item-title {
            border-bottom: 1px solid #463636;
            span {
                display: inline-block;
                padding: 15px 20px;
                position: relative;
                height: 100%;
    
                background-color: #000;
                color: #fff;
                font-size: 16px;
                font-weight: 700;
                border-radius: 4px 4px 0 0;
            }
        }
        .ss-article-type-item-sublist {
            .ss-article-type-item-sublist-title {
                display: inline-block;
                margin: 5px 10px 5px 0;
                padding: 15px 20px;
                font-size: 14px;
                cursor: pointer;
                &:hover {
                    opacity: .8;
                }

                &:nth-of-type(1) {
                    background-color: @primaryColor;
                }
                &:nth-of-type(2) {
                    background-color: @successColor;
                }
                &:nth-of-type(3) {
                    background-color: @infoColor;
                }
                &:nth-of-type(4) {
                    background-color: @warningColor;
                }
                &:nth-of-type(5) {
                    background-color: @dangerColor;
                }
            }
        }
    }
</style>