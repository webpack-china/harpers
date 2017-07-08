<template>
    <div class="q-detail">
        <QuestionDetail ref="detail" :title="questionTitle" :content="questionContent" :tag="questionTag" :summary="summary" ></QuestionDetail>
        <QAList :answers="answers"></QAList>
        <div class="question-editor">
            <div class="question-answer-author">
                <img :src="user.avatar_url">
                <span>{{user.name}}</span>
            </div>
            <div class="question-answer-editor">
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
        </div>
        <div class="detail-operation">
            <btn class="detail-submit" @click="handleAnswer" type="primary" :width="100">提交回答</btn>
        </div> 
        <Backtop></Backtop>
    </div>
</template>

<style lang="less">
    .q-detail {
        margin-top: 54px;
        padding-bottom: 80px;
    }
   .mdContainer {
        width: 730px;
   }
   .detail-operation {
    width: 980px;
    position: relative;
    margin: 0 auto;
    padding-top: 20px;
    .detail-submit {
        position: absolute;
        right: 250px;
    }
}
   .question-editor {
        width: 980px;
        padding-top: 30px;
        margin: 0 auto;
        .question-answer-author {
            padding: 10px 0;
            img {
                width: 30px;
                height: 30px;
            }
        }
        .question-answer-editor {
            .mdContainer {
                .navContainer {
                    border-top:1px solid #eee;
                    border-bottom:1px solid #ddd;
                }
                .mdBodyContainer {
                    align-items:flex-start;
                    .editContainer {
                        min-height: 280px;
                        height: 280px;
                        background:#f7f8fa;
                    }
                    .previewContainer {
                        background:#fcfaf2;
                    }
                }
            }
        }
   }
</style>

<script>
// import Vue from 'vue';
// import scroll from 'vue-scroll';
import QuestionDetail from './question_detail.vue';
import QAList from './list.vue';
import { MarkDown, Button, Backtop } from 'Components';
import { mapActions, mapState } from 'vuex';

// Vue.use(scroll);

export default {
    data() {
        return {
            mdValue: '',
            detailHeight: 0,
            timeoutHandle: null,
            summary: false,
            handleListener: null
        };
    },
    components: {
        QuestionDetail,
        QAList,
        MarkDown,
        Btn: Button,
        Backtop
    },
    computed: {
        ...mapState({
            user: state => state.User.user,
            questionTitle: state => state.Detail.question.title,
            questionTag: state => state.Detail.question.tag,
            questionContent: state => state.Detail.question.content,
            answers: state => state.Detail.answers,
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    created() {
        this.fetchData();
    },
    mounted() {
        this.handleListener = document.addEventListener('scroll', () => {
            // this.handleScroll();
        });
        this.detailHeihgt = this.$refs.detail.offsetHeight;
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.handleListener);
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
        },
        handleScroll() {
            if (document.body.scrollTop - this.detailHeight + 50 > 0) {
                this.summary = true;
            }
        }
    }
};
</script>
