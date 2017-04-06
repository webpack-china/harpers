<template>
  <div class="list-page">
    <ul class="navbar clearfix">
      <li class="navbar-li" :class="title.isActive ? 'active' : ''" v-for="(title, index) in titles"
          @click="switchContent(index, title)">{{title.name}}

      </li>
    </ul>
    <list v-for="item in items" :name="item.name" :key="item.key"></list>
  </div>
</template>

<style lang="less">
  .list-page {
    background-color: #fff;
  }

  .navbar {
    margin: 20px 20px 0;
    border-bottom: 1px solid #D8D8D8;

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

    import List from './list';

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
            switchContent: function (index, titleObj) {
                this.titles.forEach(function (item) {
                    item.isActive = false;
                });
                titleObj.isActive = true;
            }
        },

        data () {
            return {
                titles,

                items: [{
                    key: 100,
                    name: 1
                }, {
                    key: 200,
                    name: 2
                }, {
                    key: 300,
                    name: 3
                }]
            };
        }
    };

</script>
