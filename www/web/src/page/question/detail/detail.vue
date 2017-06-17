<template>
    <div>
        <QuestionDetail :title="questionTitle" :content="questionContent" :tag="questionTag"></QuestionDetail>
        <QAList :answers="answers"></QAList>
        <div id="qa-write-answer">
            <MarkDown
            :mdValuesP="mdValue"
            :fullPageStatusP="false"
            :editStatusP="false"
            :previewStatusP="false"
            :navStatusP="false"
            :placeholder="'添加你的答案'"
            @childevent="childEventHandler">
            </MarkDown>
        </div>
        <div>
            <button @click="handleAnswer">提交回答</button>
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
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            mdValue: '',
            timeoutHandle: null
        };
    },
    components: {
        QuestionDetail,
        QAList,
        MarkDown
    },
    computed: {
        questionTitle() {
            return this.$store.state.Detail.question.title;
        },
        questionTag() {
            return this.$store.state.Detail.question.tag;
        },
        questionContent() {
            return this.$store.state.Detail.question.content;
        },
        answers() {
            return this.$store.state.Detail.answers;
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    created() {
        this.fetchData();
    },
    methods: {
        ...mapActions(['updateMdValue', 'getDetail', 'addAnswer']),
        childEventHandler({mdValue, htmlValue}) {
            // action save htmlvalue
            clearTimeout(this.timeoutHandle);
            this.timeoutHandle = setTimeout(() => {
                this.updateMdValue({mdContent: mdValue, mdHtmlContent: htmlValue});
            }, 500);
        },
        fetchData() {
            let id = this.$route.params.id;
            this.getDetail({id});
        },
        handleAnswer() {
            let id = this.$route.params.id;
            this.addAnswer({id});
        }
    }
};
</script>
