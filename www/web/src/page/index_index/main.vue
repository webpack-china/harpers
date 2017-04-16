<template>
    <div>
        <header class="h-nav-bar clearfix">
            <a href="/" class="h-link-logo">webpack</a>
            <ul class="h-nav-profile">
                <li>
                    <a class="msgs" href="javascript:;">
                        <span class="msgs-count">1</span>
                        <i class="msgs-icon"></i>
                    </a>
                </li>
                <li>
                    <router-link to="User" class="nav-userinfo">
                        <img class="avatar" />
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/question/new" class="add-question">提问</router-link>
                </li>
            </ul>
            <div class="h-nav">
                <ul class="nav-ul">
                    <li class="nav-li">
                        <router-link to="/" class="nav-link active">首页</router-link>
                    </li>
                    <li class="nav-li">
                        <router-link to="detail" class="nav-link">问答</router-link>
                    </li>
                    <li class="nav-li">
                        <a href="https://doc.webpack-china.org" class="nav-link" target="blank">文档</a>
                    </li>
                    <li class="nav-li">
                        <router-link to="/" class="nav-link">帮助</router-link>
                    </li>
                </ul>
            </div>
            <search></search>
        </header>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import search from 'components/search';

    export default {
        name: 'Main',
        created() {
            console.log('hello steamer-vue');
        },
        components: { search }
    };

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../css/common/normalize";
    @import "../../css/common/reset";

    /*********** 公共样式start **********/
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        background-color: #2B3A42;
    }
    .container {
        min-height: 320px;
        background-color: #fff;
    }
    .clearfix:before,
    .clearfix:after {
        content: "";
        display: table;
    }
    .clearfix:after {
        clear: both;
    }
    .form-control {
        padding: 6px 8px;
        min-height: 34px;
        color: #24292e;
        font-size: 14px;
        line-height: 20px;
        background-color: #fff;
        border: 1px solid #d1d5da;
        border-radius: 4px;
        outline: none;
        box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
    }
    /*********** 公共样式end **********/

    /*********** 顶部导航栏start **********/
    .h-nav-bar {
        a {
            text-decoration: none;
        }
        .h-link-logo,
        .h-nav {
            float: left;
        }
        .h-link-logo {
            color: #fff;
            width: 100px;
            height: 54px;
            line-height: 54px;
            text-align: center;
        }
        .h-nav-profile {
            float: right;
            margin-right: 20px;
            li {
                display: inline-block;
                vertical-align: middle;
            }
            a {
                color: #fff;
            }
            .msgs {
                position: relative;
            }
            .msgs-count {
                position: absolute;
                top: -14px;
                left: -6px;
                display: block;
                width: 16px;
                height: 16px;
                font-size: 12px;
                background-color: #ff0000;
                line-height: 16px;
                text-align: center;
                border-radius: 50%;
            }
            .msgs-icon {
                display: inline-block;
                width: 27px;
                height: 23px;
                background-image: url('./images/msg.png');
                background-size: 100%;
            }
            .add-question {
                display: inline-block;
                width: 80px;
                height: 30px;
                line-height: 30px;
                background: #1d78c1;
                border-radius: 4px;
                text-align: center;
            }
        }
        .nav-userinfo {
            display: table-cell;
            margin: 0 auto;
            width: 60px;
            height: 54px;
            text-align: center;
            vertical-align: middle;
            .avatar {
                height: 27px;
                width: 27px;
                background-color: #ccc;
                border-radius: 50%;
                vertical-align: middle;
            }
        }

        .h-nav {
            margin-left: 20px;
        }
        .nav-li {
            float: left;
        }
        .nav-link {
            display: block;
            color: #999;
            font-size: 14px;
            width: 54px;
            height: 54px;
            line-height: 54px;
            text-align: center;
            &:hover {
                color: #fff;
            }
            &.active {
                color: #fff;
            }
        }
        .h-search {
            position: relative;
            left: 20px;
        }
    }
    /*********** 顶部导航栏end **********/
</style>
