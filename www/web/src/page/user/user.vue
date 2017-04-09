<template>
<div class="h-user">
    <UserInfo></UserInfo>
    <div>
        <ul>
            <li>动态</li>
            <li>回答</li>
            <li>提问</li>
        </ul>
        <List>
        </List>
    </div>
</div>
</template>

<script>
import UserInfo from './user_info';
import List from './list';
import { Question } from 'Components';

export default {

    name: 'User',
    components: {
        UserInfo,
        Question,
        List,
    },
    data () {
        return {

        };
    },
    methods: {

    }
};
</script>

<style lang="less">
</style>
