<template>
    <header class="top-nav-bar clearfix">
        <a href="/" class="wp-top-link-logo">webpack</a>
        <div class="top-nav-profile">
            <router-link to="home" class="wp-top-nav-userinfo">
                <img class="avatar" />
            </router-link>
        </div>
        <div class="wp-top-nav">
            <ul class="wp-top-nav-ul">
                <li class="wp-top-nav-li">
                    <router-link to="index" class="wp-top-nav-link">首页</router-link>
                </li>
                <li class="wp-top-nav-li">
                    <router-link to="detail" class="wp-top-nav-link">论坛</router-link>
                </li>
                <li class="wp-top-nav-li">
                    <router-link to="index" class="wp-top-nav-link">文档</router-link>
                </li>
                <li class="wp-top-nav-li">
                    <router-link to="index" class="wp-top-nav-link">帮助</router-link>
                </li>
                <li class="wp-top-nav-li">
                    <router-link to="/home/question/new" class="wp-top-nav-link">提问</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {

        };
    }
};
</script>

<style lang="less">

</style>
