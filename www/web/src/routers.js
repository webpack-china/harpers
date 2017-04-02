const routers = [{
    path: '/',
    name: 'index',
    component: resolve => require(['page/index_index/main.vue'], resolve)
}, {
    path: '*',
    component: resolve => require(['page/index_index/main.vue'], resolve)
}];

export default routers;
