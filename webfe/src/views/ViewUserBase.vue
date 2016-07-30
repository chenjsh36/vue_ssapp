<template lang="jade">
    router-view(:auth="auth")
</template>

<script>
    export default {
        data() {
            return {
                msg: 'I am view user base',
                name: 'ViewUserBase'
            }
        },
        props: ['auth'],
        ready: function() {
            console.log('ViewUserBase ready!')
        }
    }
</script>