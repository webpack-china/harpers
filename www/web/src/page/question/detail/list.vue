<template>
<div class="answer-list">
    <ul>
        <li v-for="answer in answers">
            <Answer v-bind="answer"></Answer>
        </li>
    </ul> 
</div>
</template>

<script>
import Answer from './question_answer.vue';

export default {

    name: 'AnswerList',
    componnets: {
        Answer
    },

    data () {
        return {

        };
    },

    props: {
        answers: {
            type: Array,
            default: () => []
        }
    }

};
</script>

<style lang="less">
</style>
