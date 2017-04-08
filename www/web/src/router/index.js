import Vue from 'vue';
import Router from 'vue-router';
import Home from './home.js';
import User from './user.js';
import Detail from './detail.js';

Vue.use(Router);

// 路由总入口
export default new Router({
    mode: 'history',
    routes: [
        Home,
        User,
        Detail
    ]
});
