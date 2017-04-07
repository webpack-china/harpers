<template>
  <div class="question-list">
    <p>{{name}}</p>
    <p>{{visitNum}}</p>
  </div>
</template>

<style lang="less" scoped>
  .question-list {
    height: 134px;
    border-bottom: 1px dashed #999;
  }
</style>

<script>
    export default {
        name: 'list',
        props: ['name', 'visitNum'],

        data () {
            return {
            };
        }
    };
</script>
