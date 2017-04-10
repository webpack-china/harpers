import Vue from 'vue';
import Router from 'vue-router';
import Home from './home.js';
import User from './user.js';
import Detail from './detail.js';
import Question from './question';

Vue.use(Router);

// 路由总入口
export default new Router({
    // development 注释掉，product取消注释
    // mode: 'history',
    routes: [
        Home,
        User,
        Detail,
        ...Question
    ]
});
