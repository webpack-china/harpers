import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from 'routers';
import Main from './main.vue';
import './css/main.less';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routers
});

new Vue({
    el: '#main',
    router,
    render: h => h(Main)
});
