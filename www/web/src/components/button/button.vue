<template>
    <button :class="classes" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {

    name: 'Button',

    data () {
        return {

        };
    },

    props: ['type', 'width'],
    computed: {
        classes() {
            let cls = ['btn'];
            let type = this.type ? this.type : 'default';
            cls.push(`btn-${type}`);
            return cls;
        },
        style() {
            return {
                width: this.width ? this.width : 80
            };
        }
    },
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="less">
.btn {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    border-radius: 4px;
    border: 0;
    padding: 0 16px;
    &-default {
        color: #2b3a42;
        background: #fff;
    }
    &-primary {
        color: #f5fafa;
        background: #1d78c1;
    }
}
</style>
