<template>
<div class="answer-list">
    <div class="answer-total">4个回答</div>
    <ul>
        <li v-for="answer in answers" class="answer-item">
            <Answer></Answer>
        </li>
    </ul> 
</div>
</template>

<script>
import Answer from './question_answer.vue';

export default {

    name: 'AnswerList',
    components: {
        Answer
    },

    data () {
        return {

        };
    },

    props: {
        answers: {
            type: Array,
            default: () => [1, 2, 3, 4, 5]
        }
    }

};
</script>

<style lang="less">
.answer-list {
    padding: 20px 0 20px 20px;
    width: 700px;
    .answer-total {
        border-bottom: 1px solid #d8d8d8;
        padding: 10px 0;
    }
}
.answer-item {
    border-bottom: 1px dashed #333;
}
</style>
