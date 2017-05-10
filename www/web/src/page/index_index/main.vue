<template>
    <div>
        <header class="h-nav-bar clearfix">
            <router-link to="/" class="h-link-logo">webpack</router-link>
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
                    <i class="login-icon"></i>
                </li>
                <li>
                    <a javascript=":;" class="add-question" @click="login">提问</a>
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
                        <a href="//doc.webpack-china.org" class="nav-link" target="blank">文档</a>
                    </li>
                    <li class="nav-li">
                        <router-link to="/" class="nav-link">帮助</router-link>
                    </li>
                </ul>
            </div>
            <Search :placeholder="'输入关键词搜索'"s></Search>
        </header>
        <div class="container">
            <router-view></router-view>
        </div>
        <div id="dialog" class="dialog" v-bind:class="{ open: isOpen }">
            <div class="dialog-overlay"></div>
            <div class="dialog-content">
                <i class="dialog-close" @click="close"></i>
                <h2>快速登录</h2>
                <a href="javascript:;" class="redirect" @click="redirectLogin">
                    <i></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import { Search } from 'Components';

    export default {
        name: 'Main',
        data () {
            return {
                isOpen: false
            };
        },
        created() {
            console.log('hello steamer-vue');
        },
        methods: {
            login () {
                this.isOpen = true;
            },
            redirectLogin () {
                window.location.href = 'http://local.webpack-china.org/api/user?_method=post&type=github';
            },
            close () {
                this.isOpen = false;
            }
        },
        components: { Search }
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
    a {
        cursor: pointer;
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

    /*********** 登录弹窗start **********/
    .dialog, .dialog-overlay {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .dialog {
        position: fixed;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        pointer-events: none;
    }
    .dialog-overlay {
        position: absolute;
        z-index: 1;
        background: rgba(0, 0, 0, 0.8);
        opacity: 0;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        -webkit-backface-visibility: hidden;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
    }
    .dialog-content {
        width: 300px;
        background: #fff;
        padding: 1em;
        text-align: center;
        position: relative;
        z-index: 5;
        opacity: 0;
        border-radius: 4px;
        .redirect {
            display: block;
            margin: 25px auto 10px;
            background-color: #fff;
            width: 60px;
            height: 60px;
            background-image: url(./images/icon_git.svg);
            border-radius: 50%;
            &:hover {
                background-color: #ccc;
            }
        }
    }
    .dialog-close {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 16px;
        height: 16px;
        background: #a5a5a5;
        -webkit-mask: center no-repeat;
        -webkit-mask-image: url(./images/icon_close.svg);
        cursor: pointer;
        &:hover {
            background: #000;
        }
    }
    .dialog.open .dialog-content {
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-name: anim-open;
        animation-name: anim-open;
        -webkit-animation-timing-function: cubic-bezier(0.6,0,0.4,1);
        animation-timing-function: cubic-bezier(0.6,0,0.4,1);
        pointer-events: auto;
    }
    .dialog.open .dialog-overlay {
        opacity: 1;
        pointer-events: auto;
    }
    @-webkit-keyframes anim-open {
        0% { opacity: 0; -webkit-transform: scale3d(1.1, 1.1, 1); }
        100% { opacity: 1; -webkit-transform: scale3d(1, 1, 1); }
    }

    @keyframes anim-open {
        0% { opacity: 0; -webkit-transform: scale3d(1.1, 1.1, 1); transform: scale3d(1.1, 1.1, 1); }
        100% { opacity: 1; -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); }
    }
    /*********** 登录弹窗end **********/
</style>
