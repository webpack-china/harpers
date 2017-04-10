<template>
<div class="h-user">
    <UserInfo></UserInfo>
    <div class="h-user-list">
        <div class="h-user-list-tabs">
            <ul class="h-user-list-tabs-wrap">
                <li class="h-user-list-tab" :class="{active: tabs[0]}" @click="handleClick(0)">动态</li>
                <li class="h-user-list-tab" :class="{active: tabs[1]}" @click="handleClick(1)">回答</li>
                <li class="h-user-list-tab" :class="{active: tabs[2]}" @click="handleClick(2)">提问</li>
            </ul>
        </div>
        <List :type="listType"></List>
    </div>
</div>
</template>

<script>
import UserInfo from './user_info';
import List from './list';

export default {

    name: 'User',
    components: {
        UserInfo,
        List,
    },
    data () {
        return {
            tabs: [1, 0, 0],
            listType: 0,
            isLoading: false,
        };
    },
    methods: {
        handleClick(index) {
            this.tabs = [0, 0, 0];
            this.tabs[index] = 1;

            this.listType = index;

            this.getRemoteList();
        },
        getRemoteList() {
            // 调用action
        }
    }
};
</script>

<style lang="less">
.h-user {
    .h-user-info {
        margin-bottom: 10px;
        box-shadow: 0 1px 5px 1px #eee;
    }
    .h-user-list {
        padding-left: 20px;
    }
    .h-user-list-tabs {
        max-width: 700px;
        ul {
            display: flex;
            border-bottom: 1px solid #d8d8d8;
        }
        li {
            font-size: 14px;
            margin-right: 30px;
            padding: 10px 0;
            margin-bottom: -1px;
            cursor: pointer;
        }
        li.active {
            border-bottom: 2px solid #1d78c1;
        }
    }
}
</style>
