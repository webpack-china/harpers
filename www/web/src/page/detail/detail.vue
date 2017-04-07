<template>
  <div class="list-page">
    <ul class="keys clearfix">
      <li class="key-li" :class="key.isActive ? 'active' : ''" v-for="key in keys" v-text="key.name" @click="switchContent(keys, key)"></li>
    </ul>
    <div class="list-container">
      <ul class="navbar clearfix">
        <li class="navbar-li" :class="title.isActive ? 'active' : ''" v-for="(title, index) in titles" v-text="title.name" @click="switchContent(titles, title)"></li>
      </ul>
      <list v-for="item in items" :name="item.name" :visitNum="item.visitNum" :key="item.key"></list>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .list-page {
  }
  .keys {
    margin-top: 8px;
    padding: 0 20px;
    background-color: #2C3A42;
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
    padding-left: 20px;
    width: 700px;
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
</style>


<script>

    /* import axios from 'axios';

    const getUser = ()=>{
        return new Promise((resolve, reject)=>{
            axios.get('/user', {

            }).then(()=>{

            }).catch()=>{

            }
        })
    };

    export default getUser; */


    import List from './list';

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
        name: '新问答'
    }, {
        name: '热门问答'
    }, {
        name: '等待回答'
    }];
    titles.forEach(function (item, index) {
        item.isActive = index === 0;
    });

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

                items: [{
                    key: 100,
                    name: '请教下一个CSS下拉菜单实现效果',
                    visitNum: 100
                }, {
                    key: 200,
                    name: '请教下一个CSS下拉菜单实现效果',
                    visitNum: 320
                }, {
                    key: 300,
                    name: '请教下一个CSS下拉菜单实现效果',
                    visitNum: 1031
                }]
            };
        }
    };

</script>
