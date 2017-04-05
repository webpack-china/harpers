import Detail from './components/detail/detail.vue';

const routers = [{
    path: '/',
    name: 'Index',
    component: Detail
}, {
    path: '/*',
    name: 'Detail',
    component: Detail
}];
export default routers;
