<template>
<div class="h-tags">
    <div class="h-tag" v-for="tag in tags">{{}}</div>
</div>
</template>

<script>
    export default {

      name: 'Tags',

      data () {
        return {

        };
    },

    props: {
        tags: {
            required: true,
            type: Array,
            default: [],
        }
    }
};
</script>

<style lang="less" scoped>
.h-tags {
    display: flex;

    .h-tag {
        margin: 0 6px;
        padding: 0 5px;
        color: #fff;
        background: #7dccf7;
        &:first-child {
            margin-left: 0;
        }
    }
}
</style>