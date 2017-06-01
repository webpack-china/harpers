<template>
    <div>
        <header class="h-nav-wrap">
            <div class="h-nav-bar clearfix">
                <router-link to="/" class="h-link-logo">webpack</router-link>
                <div class="h-nav">
                    <ul class="nav-ul">
                        <li class="nav-li" @click="switchMenu('home')">
                            <router-link :to="{ name: 'Home' }" class="nav-link" v-bind:class="{ active: isActive === 'home' }" >
                            首页</router-link>
                        </li>
                        <li class="nav-li" @click="switchMenu('questions')">
                            <router-link :to="{ name: 'questions' }" class="nav-link" v-bind:class="{ active: isActive === 'questions' }">
                            问答</router-link>
                        </li>
                        <li class="nav-li">
                            <a href="//doc.webpack-china.org" class="nav-link" target="blank">文档</a>
                        </li>
                        <li class="nav-li" @click="switchMenu('help')">
                            <router-link :to="{ name: 'Home' }" class="nav-link" v-bind:class="{ active: isActive === 'help' }">帮助</router-link>
                        </li>
                    </ul>
                </div>
                <Search :placeholder="'输入关键词搜索'" v-if="!ifHomePage"></Search>
                <ul class="h-nav-profile">
                    <!-- <li>
                        <a class="msgs" href="javascript:;" @click="login">
                            <span class="msgs-count">1</span>
                            <i class="msgs-icon"></i>
                        </a>
                    </li> -->
                    <li v-if="ifLogin">
                        <router-link :to="{ name: 'user' }" class="nav-userinfo">
                            <img class="avatar" v-bind:src="user.avatar_url" />
                        </router-link>
                    </li>
                    <li class="login-li" @click="login" v-else-if="!ifLogin">
                        <svg aria-hidden="true" class="login-icon" height="20" width="20" version="1.1" viewBox="0 0 16 16" fill="#fff"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                        <span class="login-text">注册 · 登录</span>
                    </li>
                    <li>
                        <a javascript=":;" class="add-question" @click="addQuestion">提问</a>
                    </li>
                </ul>
            </div>
        </header>
        <router-view></router-view>
        <div id="dialog" class="dialog" v-bind:class="{ open: isOpenLoginPopup }">
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
    import { mapState, mapActions } from 'vuex';
    import { Search } from 'Components';
    import { getCookie } from 'utils';

    export default {
        name: 'Main',
        data() {
            return {
                isActive: 'home',
                isOpenLoginPopup: false,
                ifLogin: false,
                ifHomePage: true
            };
        },
        mounted() {
            var userId = getCookie('user_id');
            if (userId) {
                this.fetchUserInfo({ id: userId });
                this.ifLogin = true;
            }
        },
        methods: {
            ...mapActions([
                'fetchUserInfo'
            ]),
            addQuestion() {
                this.ifLogin === true ? this.$router.push({ name: 'question_new' }) : this.login();
            },
            login() {
                this.isOpenLoginPopup = true;
            },
            redirectLogin() {
                window.location.href = '//local.webpack-china.org/api/user?_method=post&type=github';
            },
            close() {
                this.isOpenLoginPopup = false;
            },
            switchMenu(menu) {
                menu === 'home' ? this.ifHomePage = true : this.ifHomePage = false;
                this.isActive = menu;
            }
        },
        computed: {
            ...mapState({
                user: state => state.User.user
            })
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
    .container {
        margin: 0 auto;
        width: 1024px;
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
    .h-nav-wrap {
        background-color: #2B3A42;
        min-width: 1024px;
        overflow: hidden;
    }
    .h-nav-bar {
        margin: 0 auto;
        width: 1024px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        a {
            text-decoration: none;
        }
        .h-link-logo {
            color: #fff;
            width: 100px;
            height: 54px;
            line-height: 54px;
            text-align: center;
        }
        .h-nav-profile {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
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
            .login-li {
                padding: 3px 5px;
                margin-right: 18px;
                border: 1px solid #1d78c1;
                border-radius: 4px;
                cursor: pointer;
                &:hover {
                    .login-icon, .login-text {
                        fill: #ccc;
                        color: #ccc;
                    }
                }
            }
            .login-text {
                color: #fff;
                vertical-align: middle;
            }
            .login-icon {
                vertical-align: middle;
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: inherit;
        }
        .search-input {
            &::-webkit-input-placeholder { /* WebKit browsers */
                color: #999;
            }
            &::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: #999;
            }
            &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: #999;
            }
            &::-ms-input-placeholder { /* Internet Explorer 10+ */
                color: #999;
            }
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
