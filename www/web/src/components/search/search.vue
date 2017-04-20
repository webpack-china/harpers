<template>
    <div class="h-search">
        <input type="text" v-model="searchKey" v-bind:placeholder="placeholder" class="form-control search-input" @keyup="search" />
    </div>
</template>

<script>
    export default {
        name: 'Search',
        props: {
            placeholder: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                searchKey: ''
            };
        },
        mounted () {
            console.log(this.placeholder);
        },
        methods: {
            search: function (key) {
                if (key.keyCode === 38 || key.keyCode === 40) {
                    return;
                }
                if (key.keyCode === 13) {
                    this.$router.push({ path: 'search', query: { query: this.searchKey } });
                }
            }
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
