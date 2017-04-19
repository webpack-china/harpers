<template>
    <div class="h-search">
        <input type="text" v-model="searchValue" v-bind:placeholder="placeholder" class="form-control search-input" @keyup="search" />
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

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
                searchValue: ''
            };
        },
        mounted () {
            console.log(this.placeholder);
        },
        methods: {
            ...mapActions([
                'fetchSearchList'
            ]),
            search: function (key) {
                if (key.keyCode === 38 || key.keyCode === 40) {
                    return;
                }
                if (key.keyCode === 13) {
                    window.open('./');
                }
                this.fetchSearchList();
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
