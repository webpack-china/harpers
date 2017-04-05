import Vue from 'vue';
import router from '../../router';
import Main from './main.vue';
import './css/main.less';

// 页面主视图，router的容器
new Vue({
    el: '#main',
    router,
    render: h => h(Main)
});
