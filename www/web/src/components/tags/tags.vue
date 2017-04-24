<template>
<div class="h-tags">
    <div class="h-tag" v-for="tag in tags">{{tag}}</div>
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
    font-size: 12px;
    height: 16px;
    .h-tag {
        margin: 0 6px;
        padding: 2px 5px;
        line-height: 1;
        color: #1d78c1;
        background: #7dccf7;
        &:first-child {
            margin-left: 0;
        }
    }
}
</style>
