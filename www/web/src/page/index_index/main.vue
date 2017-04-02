<style lang="less" rel="stylesheet/less">
    @import "../../css/common/common";
    @import "../../css/common/reset";
    @import "css/main";

    body {
        background-color: #2B3A42;
    }
    a {
        color: #fff;
    }
    .container {
        font-size: 30px;
        min-height: 320px;
    }
</style>

<template>
    <div>
        <header class="top-nav-bar">
            <a href="/" class="wp-top-link-logo">webpack</a>
            <div class="top-nav-profile">
                <router-link to="index">
                    <img class="avatar" />
                </router-link>
            </div>
            <div class="wp-top-nav">
                <ul class="wp-top-nav-ul">
                    <li class="wp-top-nav-li">
                        <router-link to="index">首页</router-link>
                    </li>
                    <li class="wp-top-nav-li">
                        <router-link to="index">论坛</router-link>
                    </li>
                    <li class="wp-top-nav-li">
                        <router-link to="index">文档</router-link>
                    </li>
                    <li class="wp-top-nav-li">
                        <router-link to="index">帮助</router-link>
                    </li>
                </ul>
            </div>
        </header>
        <div class="container">
            <section class="search-wrap"></section>
            <section class="selection-wrap"></section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Steamer Vue'
            }
        },
        created() {
            console.log('hello steamer-vue')
        }
    }
</script>
