<template>
    <div class="search-wrap">
        <div>搜索关键词是：{{ searchKey }}</div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data () {
            return {
                searchKey: ''
            };
        },
        mounted () {
            this.searchKey = this.$route.query.query;
        },
        methods: {

        }
    };
</script>

<style lang="less">

</style>
