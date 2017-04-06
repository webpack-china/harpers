<template>
  <div class="detail">
      Detail
      <list v-for="item in items" :name="item.name" :key="item.key"></list>
  </div>
</template>

<script>

    import List from './list';

    export default {

        name: 'detail',

        components: {
            list: List
        },

        data () {
            return {
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

<style lang="less">
</style>
