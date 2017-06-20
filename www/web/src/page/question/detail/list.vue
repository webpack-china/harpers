<template>
<div class="answer-list">
    <div class="answer-total">{{total}}个回答</div>
    <ul>
        <li v-for="answer in answers" class="answer-item">
            <Answer v-bind="answer"></Answer>
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
            default: () => []
        },
        total: {
            type: Number,
            default: 0
        }
    }

};
</script>

<style lang="less">
.answer-list {
    // padding: 20px 0 20px 20px;
    width: 980px;
    margin: 0 auto;
    .answer-total {
        width: 700px;
        border-bottom: 1px solid #d8d8d8;
        padding: 10px 0;
    }
    ul {
        width: 700px;
    }
}

.answer-item {
    border-bottom: 1px solid #efefef;
}
</style>
