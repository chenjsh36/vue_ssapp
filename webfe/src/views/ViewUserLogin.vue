<template lang="jade">
    .ss-fixed-container
        .ss-topbar
            .back-item(v-on:click="goBack") 返回
            .title(v-on:click="focus") 登录

        .ss-login-container
            form.ss-login-form
                .form-group
                    input.form-control(type="text" placeholder="用户名")
                .form-group
                    input.form-control(type="password" placeholder="密码") 
                button.btn.btn-default.btn-block 登录

        .ss-fixed-bottombar
            .ss-go-reg
                p 
                    |没有账号？
                    a(v-link="{ path: '/user/reg' }") 前去注册
</template>

<script>
    export default {
        data() {
            return {
                msg: 'I am view user login',
                name: 'ViewUserLogin'
            }
        },
        ready: function() {
            console.log('ViewUserLogin ready!')
        },
        methods: {
            // 返回上一级历史
            goBack: function() {
                window.history.back()
            },
            focus: function() {
                var inputs = document.querySelector('.ss-login-container input')
                console.log('input:', inputs);
                inputs.click()
            }
        }
    }
</script>
<style lang="less">
    .ss-login-container {
        .ss-login-form {
            margin: 15px;
        }
    }
    .ss-fixed-bottombar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: 15px;
        text-align: center;
    }
</style>
