<template>
    <div>
        <QuestionDetail></QuestionDetail>
        <QAList></QAList>
        <div id="qa-write-answer">
            <MarkDown
            :mdValuesP="mdData.mdValue"
            :fullPageStatusP="false"
            :editStatusP="false"
            :previewStatusP="false"
            :navStatusP="false"
            :placeholder="'添加你的答案'"
            @childevent="childEventHandler">
            </MarkDown>
        </div>
    

    </div>
</template>

<style lang="less">
   .mdContainer {
    margin-left: 20px;
    width: 680px;
   } 
</style>

<script>
import QuestionDetail from './question_detail.vue';
import QAList from './list.vue';
import { MarkDown } from 'Components';
export default {
    data() {
        return {
            mdData: {
                mdValue: ''
            }
        };
    },
    components: {
        QuestionDetail,
        QAList,
        MarkDown
    },
    methods: {
        childEventHandler(res) {
            this.mdData = res;
        }
    }
};
</script>
