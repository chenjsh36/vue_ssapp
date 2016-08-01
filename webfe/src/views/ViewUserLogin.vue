<template lang="jade">
    .ss-fixed-container(v-show="show" transition="ss")
        comp-topbar(:title="title" back="true")
        .ss-login-container
            form.ss-login-form
                .form-group
                    input.form-control(type="text" placeholder="用户名" v-model="user" name="login_user")
                .form-group
                    input.form-control(type="password" placeholder="密码" v-model="password" name="login_password") 
                button.btn.btn-default.btn-block(v-on:click="login") 登录

        .ss-fixed-bottombar
            .ss-go-reg
                p 
                    |没有账号？
                    a(v-link="{ path: '/user/reg' }") 前去注册
</template>

<script>
    import SS from '.././common/ssquery.js'
    import CompTopbar from './../components/CompTopbar.vue'
    export default {
        data() {
            return {
                msg: 'I am view user login',
                name: 'ViewUserLogin',
                show: true,
                title: '登录',
                user: '',
                password: ''
            }
        },
        ready: function() {
            console.log('ViewUserLogin ready!')
        },
        components: {
            CompTopbar
        },
        methods: {
            // 返回上一级历史
            goBack: function() {
                window.history.back()
            },
            checkLoginForm: function() {
                let user = this.user
                    , password = this.password
                    , user_input = document.querySelector('input[name=login_user]')
                    , password_input = document.querySelector('input[name=login_password]')
                    , is_ok = true
                    ; 
                if (user === '') {
                    SS.addClass(user_input.parentNode, 'has-error')
                    is_ok = false
                } else if (/^[A-Za-z0-9_\-\u4e00-\u9fa5]{3,20}$/.test(user) === false) {
                
                    SS.addClass(user_input.parentNode, 'has-error')
                    is_ok = false
                } else {
                    SS.removeClass(user_input.parentNode, 'has-error')
                }

                if (password === '') {
                    SS.addClass(password_input.parentNode, 'has-error')
                    is_ok = false
                } else if (/^[A-Za-z0-9_-]{3,20}$/.test(password) === false) {
                    SS.addClass(password_input.parentNode, 'has-error')
                    is_ok = false
                } else {
                    SS.removeClass(password_input.parentNode, 'has-error')
                }
                return is_ok
            },
            login: function(event) {
                event.preventDefault()
                event.stopPropagation()
                console.log('to Login:', this.user, this.password);
                let is_ok = this.checkLoginForm()
                if (is_ok === false) {
                    return;
                }

                this.$http.post('http://192.168.1.60:9001/login/',{
                    user: 'chenjsh',
                    password: '1234',
                    verifycode: '2xs2'
                }).then((response) => {
                    let json_res = response.json()

                    if (json_res.status !== 200) {
                        console.log('error', json_res)
                        return;
                    }
                    console.log('success', json_res)
                }, (response) => {
                    let json_res = response.json()
                    console.log('error', json_res)
                })
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
