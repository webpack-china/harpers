<style lang="less" rel="stylesheet/less">
    // @import "../../css/common/common";
    // @import "css/main";

    @import "../../css/common/normalize";
    @import "../../css/common/reset";

    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        background-color: #2B3A42;
    }
    .container {
        /*font-size: 30px;*/
        min-height: 320px;
        background-color: #fff;
    }
    .clearfix:before,.clearfix:after{
        content:"";
        display:table;
    }
    .clearfix:after{clear:both;}
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
