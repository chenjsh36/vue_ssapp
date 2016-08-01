<template lang="jade">
    comp-topbar(:title="title")
    router-view(:auth="auth")
    comp-bottombar
</template>

<script>
    import CompTopbar from './../components/CompTopbar.vue'
    import CompBottombar from './../components/CompBottombar.vue'
    export default {
        data() {
            return {
                msg: 'I am view user base',
                name: 'ViewUserBase',
                title: '个人中心',
            }
        },        
        components: {
            CompTopbar,
            CompBottombar
        },
        props: ['auth'],
        ready: function() {
            console.log('ViewUserBase ready!')
        }
    }
</script>