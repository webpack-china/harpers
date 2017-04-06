import Vue from 'vue';
import Router from 'vue-router';
import Home from './home.js';
import Detail from './detail.js';

Vue.use(Router);

// 同一路由
export default new Router({
    mode: 'history',
    routes: [
        Home,
        Detail
    ]
});
