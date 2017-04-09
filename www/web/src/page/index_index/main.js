import Vue from 'vue';
import router from '../../router';
import Main from './main.vue';
import store from '../../store';

// 页面主视图，router的容器
new Vue({
    el: '#main',
    router,
    store,
    render: h => h(Main)
});
