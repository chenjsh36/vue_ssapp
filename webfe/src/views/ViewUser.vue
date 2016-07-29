<template lang="jade">
    .ss-user
        .ss-user-card(v-on:click="goUserInfo")
            .ss-user-card-img 
                img(src="http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg" alt="个人头像" class="img-circle")
            .ss-user-card-name 我的姓名
        .ss-user-info.row
            .ss-user-info-item.col-xs-4 历史
            .ss-user-info-item.col-xs-4 收藏
            .ss-user-info-item.col-xs-4 金币
        .ss-user-msglist
            .ss-user-msglist-item 我的消息
</template>

<script>
    export default {
        data() {
            return {
                msg: 'I am view user',
                name: 'ViewUser'
            }
        },
        ready: function() {
            console.log('ViewUser ready!')
        },
        methods: {
            goUserInfo: function() {
                console.log('gouserinfo:', this);
                this.$router.go('/user/login');
            }
        }
    }
</script>
<style lang="less">
    @borderColor: #c7bcbc;

    .ss-user {
        position: relative;
        margin: 0 -15px;
        // 个人卡片
        .ss-user-card {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
            text-align: center;
            background-color: #656367;
            .ss-user-card-img {
                position: relative;
                width: 100px;
                height: 100px;
                overflow: hidden;
                margin: 25px auto;
            
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .ss-user-card-name {
                font-size: 16px;
                font-weight: 700;
                color: #fff;
            }
        }

        // 历史收藏金币选项
        .ss-user-info {
            position: relative;
            background-color: white;
            .ss-user-info-item {
                position: relative;

                text-align: center;
                height: 80px;
                line-height: 80px;
                border-left: 1px solid @borderColor;
                border-bottom: 1px solid @borderColor;
            }
        }
        // 个人信息
        .ss-user-msglist {
            position: relative;
            margin-top: 15px;
            .ss-user-msglist-item {
                position: relative;
                padding: 5px 10px;
                background-color: #fff;
                border-top: 1px solid @borderColor;
                border-bottom: 1px solid @borderColor;
            }
        }
    }
</style>
