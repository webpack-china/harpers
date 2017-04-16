<template>
<div class="question-new">
    <div class="title">
        <input type="text" name="" placeholder="添加标题" v-model="title">
        <button @click="publish">发布</button>
    </div>
    <markdown
        :mdValuesP="mdData.mdValue"
        :fullPageStatusP="false"
        :editStatusP="false"
        :previewStatusP="false"
        :navStatusP="false"
        :icoStatusP="true"
        :placeholder="'描述你的问题'"
        @childevent="childEventHandler">
    </markdown>
</div>
</template>


<script>
import markdown from '../../components/markdown';
import { qustionService } from 'services';

export default {
    name: 'question_new',

    components: {
        markdown
    },

    methods: {
        childEventHandler(res) {
            this.mdData = res;
        },
        publish() {
            if (!this.title) {
                alert('标题不能为空');
            }
            qustionService.addQuestion({
                title: this.title,
                tag: '1,2,3',
                markdown_content: this.mdData.mdValue
            }).then(r => {
                if (r.errno !== 0) {
                    console.log(r);
                } else {
                    alert('提交成功');
                }
            });
        }
    },

    watch: {

    },

    computed: {
    },

    data() {
        return {
            title: '',
            mdData: {
                mdValue: ''
            }
        };
    }
};
</script>


<style lang="less">
.question-new {
    height:100%;
    padding:5px;
}
.title {
    position:relative;
    input {
        display: block;
        border:none;
        font-size:20px;
        width:80%;
        padding:10px;
    }
    button {
        position:absolute;
        right:10px;
        top:7px;
        width:80px;
        background:#0179bd;
        color:#fff;
        font-size:14px;
        border:none;
        border-radius:4px;
    }
}

.mdContainer {
    .navContainer {
        border-top:1px solid #eee;
        border-bottom:1px solid #ddd!important;
    }
    .mdBodyContainer {
        height:500px!important;
        align-items:flex-start!important;
        .editContainer {
            background:#FFF;
            textarea{
                border:none;
                color:#333!important;
            }
        }
        .previewContainer {
            background:#fcfaf2;
        }
    }
}

</style>
