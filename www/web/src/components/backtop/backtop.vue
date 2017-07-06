<template>
<div class="backtop" @click="handleClick">
    <div class="up-arrow">&#11014;</div>
</div>
</template>

<script>
export default {

    name: 'Backtop',

    data () {
        return {

        };
    },

    props: [],
    computed: {
        styles() {
            return {};
        }
    },
    mounted() {
        
    },
    beforeDestroy() {

    },
    methods: {
        handleClick() {
            document.body.scrollTop = 0;
        }
    }
};
</script>

<style lang="less">
.backtop {
    position: fixed;
    width: 40px;
    height: 40px;
    line-height: 40px;
    bottom: 120px;
    right: 120px;
    border-radius: 4px;
    background: #e3edf8;
    cursor: pointer;
    .up-arrow {
        text-align: center;
        font-size: 18px;
        color: #9aaabf;
        &:hover {
            color: #1d78c1;
        }
    }
}
</style>
