<template>
    <div>
        <QuestionDetail></QuestionDetail>
        <QAList></QAList>
        <MarkDown></MarkDown>
    </div>
</template>

<style lang="less">
    
</style>

<script>
import QuestionDetail from './question_detail.vue';
import QAList from './list.vue';
import { MarkDown } from 'Components';
console.log(MarkDown);
export default {
    components: {
        QuestionDetail,
        QAList,
        MarkDown
    }
};
</script>
