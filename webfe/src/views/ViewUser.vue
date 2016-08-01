<template lang="jade">
    .ss-user
        .ss-user-card(v-on:click="goUserInfo")
            template(v-if="auth.is_login")
                .ss-user-card-img  
                    img(src="http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg" alt="个人头像" class="img-circle")
                .ss-user-card-name chenjsh36
            template(v-else)
                .ss-user-card-img  
                    img(src="http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg" alt="个人头像" class="img-circle")
                .ss-user-card-name 请点击登录   
        .ss-user-info
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
        props: ['auth'],
        ready: function() {
            console.log('ViewUser ready!', this.auth, this)
        },
        methods: {
            /**
             * 登录时跳转到个人信息设置页面，未登录跳转到登录页面
             */
            goUserInfo: function() {
                console.log('gouserinfo:', this);
                // 已经登录
                if (this.auth.is_login === false) {
                    this.$router.go('/user/login')
                    return
                }
                this.$router.go('/user/setinfo')
                return
            }
        }
    }
</script>
<style lang="less">
    @borderColor: #c7bcbc;

    .ss-user {
        position: relative;
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
            &:before {
                content: '';
                display: table;
            }
            &:after {
                content: '';
                display: table;
                clear: both;
            }
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
