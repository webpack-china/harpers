<style lang="less" rel="stylesheet/less">
    // @import "../../css/common/common";
    // @import "../../css/common/reset";
    // @import "css/main";

    body {
        background-color: #2B3A42;
        margin: 0;
    }
    a {
        color: #fff;
    }
    ul, li{
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    .container {
        font-size: 30px;
        min-height: 320px;
    }
    .clearfix:before,.clearfix:after{
        content:"";
        display:table;
    }
    .clearfix:after{clear:both;}
    .clearfix{
        *zoom:1;/*IE/7/6*/
    }
</style>

<template>
    <div>
        <headerNav></headerNav>
        <div class="container">
            <router-view></router-view>   
        </div>
    </div>
</template>

<script>

    import headerNav from 'components/header';

    export default {
        name: 'Main',
        created() {
            console.log('hello steamer-vue');
        },
        components: { headerNav }
    };
    
</script>
