<template>
    <div class="list-page">
        <div class="list-nav">
            <ul class="keys clearfix">
                <li class="key-li" :class="key.isActive ? 'active' : ''" v-for="key in keys" 
                v-text="key.name" @click="switchContent(keys, key)"></li>
            </ul>
        </div>
        <div class="list-container">
            <ul class="navbar clearfix">
                <li class="navbar-li" :class="title.isActive ? 'active' : ''" 
                v-for="(title, index) in titles" v-text="title.name" @click="switchContent(titles, title)"></li>
            </ul>
            <list :qt="item" v-for="item in items" :name="item.name" :visitNum="item.visitNum" :key="item.key"></list>
        </div>
    </div>
</template>

<style lang="less" scope>
    .list-nav {
        background-color: #2C3A42;
    }

    .keys, .list-container {
        margin: 0 auto;
        width: 1024px;
    }
    
    .key-li {
        float: left;
        margin-right: 20px;
        padding: 8px 8px 0;
        line-height: 32px;
        font-size: 12px;
        color: #999;
        cursor: pointer;
        &.active,&:hover {
          color: #F5FAFA;
          border-bottom: #f00 2px solid;
        }
    }

    .list-container {
        overflow: hidden;
        padding-bottom: 20px;
    }

    .navbar {
        padding-top: 20px;
        border-bottom: 1px solid #D8D8D8;
        background-color: #fff;
    }

    .navbar-li {
        float: left;
        font-size: 14px;
        margin-right: 30px;
        cursor: pointer;
        line-height: 34px;
        color: #999;
        &.active {
          color: #333;
        }
    }

    .h-question {
        padding: 20px 0;
        border-bottom: 1px dashed #999;
    }
</style>


<script>

    import axios from 'axios';

    import List from '../../components/question';

    var keys = [{
        name: 'ALL'
    }, {
        name: 'HTML'
    }, {
        name: 'CSS'
    }, {
        name: 'CSS3'
    }];
    keys.forEach(function (item, index) {
        item.isActive = index === 0;
    });

    var titles = [{
        name: '最新动态'
    }, {
        name: '最新问答'
    }, {
        name: '热门问答'
    }, {
        name: '等待回答'
    }];
    titles.forEach(function (item, index) {
        item.isActive = index === 0;
    });


    const initGetQuestion = () => {
        return new Promise((resolve, reject) => {
            axios.get('/api/question', {}).then((result) => {
                result = result.data;
                if (result.errno) {
                    reject(result.error);
                } else {
                    resolve(result.data);
                }
            }).catch(() => {});
        });
    };

    export default {

        name: 'detail',

        components: {
            list: List
        },

        methods: {
            switchContent: function (arr, itemObj) {
                arr.forEach(function (item) {
                    item.isActive = false;
                });
                itemObj.isActive = true;
            }
        },

        data () {
            return {
                keys,
                titles,
                items: []
            };
        },

        created: function () {
            // 初始化渲染
            initGetQuestion().then((result) => {
                console.log(result);
                this.items = result;
            }, function (error) {
                throw new Error(error);
            });
        }
    };

</script>
