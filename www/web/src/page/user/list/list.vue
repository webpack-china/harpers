<template>
<div class="list">
    <Question :qt="{}"></Question>
</div>
</template>

<script>
import { Question } from 'Components';

export default {

    name: 'list',
    components: {
        Question,
    },
    data () {
        return {

        };
    }
};
</script>

<style lang="less">
</style>
