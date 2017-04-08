import Vue from 'vue';
import Router from 'vue-router';
import Home from './home.js';
import User from './user.js';

Vue.use(Router);

// 同一路由
export default new Router({
    routes: [
        Home,
        User
    ]
});
