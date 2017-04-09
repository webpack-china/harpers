<template>
    <div class="h-search">
        <input type="text" placeholder="输入关键词搜索" class="form-control search-input" />
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data () {
            return {

            };
        }
    };
</script>

<style lang="less">
    .h-search {
        display: table-cell;
        height: 54px;
        vertical-align: middle;
        .search-input {
            width: 300px;
            height: 30px;
            color: #fff;
            background-color: #465e69;
            border: 0;
            box-shadow: none;
        }
    }
</style>
