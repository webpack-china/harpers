<template>
<div class="h-user">
    <Question :qt="{}"></Question>
</div>
</template>

<script>
import { Question } from 'Components';

export default {

    name: 'User',
    components: {
        Question
    },
    data () {
        return {

        };
    }
};
</script>

<style lang="less">
</style>
