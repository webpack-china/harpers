<template>
<div class="question-list">
    <div class="question-item" v-for="i in 4">
        <Question :qt="{}"></Question>
    </div>
</div>
</template>

<script>
import { Question } from 'Components';

export default {

    name: 'list',
    components: {
        Question,
    },
    props: {
        type: Number
    },
    data () {
        return {

        };
    }
};
</script>

<style lang="less">
.question-list {
    max-width: 700px;
    .question-item {
       padding: 22px 0; 
       border-bottom: 1px dashed #d8d8d8;
    }
}
</style>
