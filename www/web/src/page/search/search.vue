<template>
    <div class="search-wrap">
        <div class="left">
            <ul>
                <li class="class-item" v-bind:class="{ active: isActive === 'qustions' }"
                @click="switchTab('qustions')">
                    <svg width="30" height="30" viewBox="0 0 30 30"><title></title><path d="M0 1.992C0 .892.898 0 1.992 0h26.016C29.108 0 30 .898 30 1.992v26.016c0 1.1-.898 1.992-1.992 1.992H1.992C.892 30 0 29.102 0 28.008V1.992zm15.017 2.02c-1.354 0-2.662.257-3.887.764-1.204.497-2.274 1.213-3.183 2.126-.834.81-1.508 1.754-2.002 2.803-.48 1.018-.777 2.105-.882 3.23-.104 1.123-.015 2.244.266 3.333.288 1.12.77 2.168 1.434 3.118.545.79 1.2 1.492 1.948 2.087.677.54 1.432.99 2.247 1.345l2.556 2.55.004.004.004.004c.202.2.44.352.71.456.25.097.513.146.783.146s.534-.05.784-.146c.27-.104.508-.257.71-.456l.004-.004.003-.003 2.562-2.556c1.724-.766 3.17-1.947 4.19-3.428.663-.95 1.144-2 1.43-3.122.277-1.087.362-2.208.255-3.332-.108-1.122-.405-2.207-.882-3.225-.49-1.047-1.16-1.99-1.983-2.802-.91-.915-1.98-1.63-3.186-2.13-1.226-.506-2.534-.763-3.887-.763zm0 1.335c2.377 0 4.55.926 6.106 2.496 2.91 2.86 3.36 7.45 1.024 10.79-.942 1.37-2.295 2.417-3.852 3.06l-2.745 2.74c-.144.14-.34.21-.533.21-.195 0-.39-.07-.533-.21l-2.745-2.74c-1.6-.643-2.91-1.69-3.854-3.06-2.336-3.34-1.926-7.93 1.025-10.79 1.558-1.57 3.73-2.496 6.107-2.496zm.048 15.277c.495 0 .897-.394.897-.88 0-.488-.402-.882-.897-.882s-.897.394-.897.88c0 .488.402.882.897.882zm3.918-8.765c.094-.743-.047-1.578-.425-2.32-.19-.325-.425-.65-.708-.928-.803-.788-1.794-1.113-2.738-1.113-.566 0-1.085.092-1.557.324-.473.185-.945.51-1.322.835-.66.694-1.133 1.622-1.133 2.735 0 .51.378.88.897.88.52 0 .897-.37.897-.834 0-.602.236-1.065.613-1.436.19-.232.472-.37.708-.464.284-.093.567-.186.85-.186.52 0 1.04.186 1.463.603.19.186.284.37.425.557.19.37.283.788.236 1.206-.048.37-.237.788-.567 1.066-.142.14-.33.28-.52.37-.472.233-.944.512-1.32 1.022-.38.51-.662 1.206-.662 2.272 0 .51.38.88.898.88.52 0 .944-.416.944-.926 0-.603.094-.974.283-1.206.19-.232.472-.37.755-.51.33-.186.66-.418.897-.696.614-.603.944-1.345 1.086-2.133z" fill="#9CADC9" fill-rule="evenodd"/></svg>
                    <span>问答</span>
                    <span class="class-item-count">255结果</span>
                </li>
                <li class="class-item" v-bind:class="{ active: isActive === 'users' }"
                @click="switchTab('users')">
                    <svg width="30" height="30" viewBox="0 0 30 30"><title></title><path d="M0 1.992C0 .892.898 0 1.992 0h26.016C29.108 0 30 .898 30 1.992v26.016c0 1.1-.898 1.992-1.992 1.992H1.992C.892 30 0 29.102 0 28.008V1.992zM17.924 18.24c-.13-.042-.955-.394-.44-1.878h-.007c1.342-1.31 2.37-3.42 2.37-5.496C19.846 7.673 17.604 6 15 6c-2.605 0-4.833 1.673-4.833 4.866 0 2.085 1.02 4.203 2.372 5.51.525 1.308-.416 1.794-.613 1.863C9.2 19.172 6 20.876 6 22.557v.63C6 25.478 10.688 26 15.026 26 19.37 26 24 25.48 24 23.188v-.63c0-1.732-3.215-3.422-6.076-4.32z" fill="#9CADC9" fill-rule="evenodd"/></svg>
                    <span>用户</span>
                    <span class="class-item-count">255结果</span>
                </li>
                <li class="class-item" v-bind:class="{ active: isActive === 'tags' }"
                @click="switchTab('tags')">
                    <svg width="30" height="30" viewBox="0 0 30 30"><title></title><path d="M0 1.992C0 .892.898 0 1.992 0h26.016C29.108 0 30 .898 30 1.992v26.016c0 1.1-.898 1.992-1.992 1.992H1.992C.892 30 0 29.102 0 28.008V1.992zm23.52 12.996l-8.63-8.685c-.133-.108-.282-.195-.443-.263-.04-.013-.108-.023-.202-.03-.095-.007-.155-.01-.182-.01h-6.67c-.147 0-.31.027-.484.08-.176.055-.33.156-.465.304-.15.148-.24.303-.273.464-.034.162-.064.33-.09.505 0 .014-.008.02-.02.02-.015 1.158-.028 2.21-.042 3.15 0 .405-.003.802-.01 1.193-.007.39-.01.74-.01 1.05V13.978c0 .202.05.374.152.515.1.14.17.24.212.293.013.027.15.17.414.434.263.263.6.603 1.01 1.02.41.417.88.89 1.405 1.414l1.616 1.616c1.28 1.292 2.734 2.753 4.364 4.382.202.202.485.317.85.344.363.027.686-.074.97-.303l6.546-6.585c.62-.686.613-1.393-.02-2.12zM9.072 10.342c-.364 0-.674-.13-.93-.393-.256-.264-.384-.577-.384-.94 0-.364.128-.674.384-.93s.566-.383.93-.383c.363 0 .673.127.93.383.255.256.383.566.383.93 0 .363-.128.676-.384.94-.255.26-.565.392-.928.392z" fill="#9CADC9" fill-rule="evenodd"/></svg>
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
            // TODO ajax search
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
        margin-top: 54px;
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
            padding: 5px;
            border-radius: 4px;
            cursor: pointer;
            &.active {
                background-color: #e9eff3;
            }
            &:hover {
                background-color: #e9eff3;
            }
            svg, span {
                vertical-align: middle;
            }
        }
        .class-item-count {
            float: right;
            color: #bbb;
            font-size: 12px;
            line-height: 30px;
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
