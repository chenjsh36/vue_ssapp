<template lang="jade">
    .ss-fixed-container(v-show="show" transition="ss")
        .ss-topbar
            .back-item.glyphicon.glyphicon-circle-arrow-left(v-on:click="goBack")
            .title(v-on:click="focus") 注册

        .ss-login-container
            form.ss-login-form
                .form-group
                    input.form-control(type="text" placeholder="用户名")
                .form-group
                    input.form-control(type="password" placeholder="密码") 
                .form-group
                    input.form-control(type="password" placeholder="确认密码") 
                button.btn.btn-default.btn-block 注册

</template>

<script>
    export default {
        data() {
            return {
                msg: 'I am view user login',
                name: 'ViewUserLogin',
                show: true
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


</style>
