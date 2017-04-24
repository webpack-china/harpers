<template>
    <div>
        <QuestionDetail></QuestionDetail>
    </div>
</template>

<style lang="less">
    
</style>

<script>
import QuestionDetail from './question_detail';
import QuestionAnswer from './question_answer';
import MarkDown from 'Components';

export default {
    components: {
        QuestionDetail,
        QuestionAnswer,
        MarkDown
    }
};
</script>
