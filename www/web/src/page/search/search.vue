<template>
    <div class="search-wrap">
        <div class="left">
            <ul>
                <li class="class-item" v-bind:class="{ active: isActive === 'qustions' }"
                @click="switchTab('qustions')">
                    <i></i>
                    <span>问答</span>
                    <span class="class-item-count">255结果</span>
                </li>
                <li class="class-item" v-bind:class="{ active: isActive === 'users' }"
                @click="switchTab('users')">
                    <i></i>
                    <span>用户</span>
                    <span class="class-item-count">255结果</span>
                </li>
                <li class="class-item" v-bind:class="{ active: isActive === 'tags' }"
                @click="switchTab('tags')">
                    <i></i>
                    <span>标签</span>
                    <span class="class-item-count">255结果</span>
                </li>
            </ul>
        </div>
        <div class="right-fix">
            <div class="result-item" v-for="i in 10" v-if="isActive === 'qustions'">
                <Question :qt="{}"></Question>
            </div>
            <div class="result-item user-list" v-for="i in 5" v-if="isActive === 'users'">
                <UserList></UserList>
            </div>
            <div class="result-item" v-for="i in 5" v-if="isActive === 'tags'">
                <Question :qt="{}"></Question>
            </div>
        </div>
    </div>
</template>

<script>
    import { Question, UserList } from 'Components';

    export default {
        name: 'search',
        data () {
            return {
                isActive: 'users',
                searchKey: ''
            };
        },
        mounted () {
            this.searchKey = this.$route.query.query;
        },
        methods: {
            switchTab (tab) {
                this.isActive = tab;
            }
        },
        components: { Question, UserList }
    };
</script>

<style lang="less">
    .search-wrap {
        display:flex;
        margin: auto;
        padding-top: 30px;
        width: 1120px;
        .left {
            margin-right: 10px;
            width: 220px;
            float: left;
        }
        .class-item {
            padding: 8px 5px;
            border-radius: 4px;
            cursor: pointer;
            &.active {
                background-color: #e9eff3;
            }
            &:hover {
                background-color: #e9eff3;
            }
        }
        .class-item-count {
            float: right;
            color: #bbb;
            font-size: 12px;
            line-height: 20px;
        }
        .right-fix {
            flex: 1;
        }
        .result-item {
            padding: 20px 0px;
            border-bottom: 1px solid #eee;
            &:first-child {
                padding-top: 0px;
            }
            &.user-list {
                padding: 0px;
            }
        }
    }
</style>
