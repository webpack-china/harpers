<template>
    <div class="search-user-list">
        <div class="list-item">
            <div class="content-item">
                <div class="content-item-image">
                    <a href="#" class="user-avatar-link">
                        <img src="https://avatars3.githubusercontent.com/u/316498?v=3&s=100" alt="" class="avatar user-link-avatar"/>
                    </a>
                </div>
                <div class="content-item-head">
                    <h2 class="content-item-title">
                        <a href="" class="user-name-link">akira-cn</a>
                    </h2>
                    <div class="content-item-meta">
                        <span class="content-item-status">粉丝 45k</span>
                        <span class="content-item-status">提问 63</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'userList',
        data () {
            return {
            };
        },
        mounted () {
        },
        methods: {
        }
    };
</script>

<style lang="less">
    .search-user-list {
        .list-item {
            position: relative;
            padding: 16px 20px;
        }
        .content-item-image, .content-item-head {
            display: inline-block;
            vertical-align: middle;
        }
        .content-item-image {
            margin-right: 10px;
        }
        .user-avatar-link {
            display: block;
            height: 40px;
            width: 40px;
        }
        .user-link-avatar {
            height: 40px;
            width: 40px;
            background-color: #ccc;
            border-radius: 4px;
        }
        .content-item-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        .user-name-link {
            color: #1e1e1e;
            text-decoration: none;
        }
        .content-item-meta {
            color: #afafaf;
        }
        .content-item-status {
            &:not(:first-child):before {
                display: inline-block;
                content: "";
                margin: 0 5px 0 3px;
                width: 1px;
                height: 13px;
                background: #e7eaf1;
            }
        }
    }
</style>
