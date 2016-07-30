<template lang="jade">
    .ss-fixed-container(v-show="show" transition="ss")
        .ss-topbar
            .back-item.glyphicon.glyphicon-circle-arrow-left(v-on:click="goBack")
            .title  文章
        .ss-fixed-bottombar
            ul.nav.navabar-nav
                li.col-xs-6 收藏
                li.col-xs-6 资源

</template>
<script>
    import SS from '.././common/ssquery.js'
    export default {

    }
</script>