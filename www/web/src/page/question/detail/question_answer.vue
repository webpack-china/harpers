<template>
<div class="answer"> 
    <p class="answer-author">
        <span class="answer-author-icon">
            <img :src="avatarUrl" alt="">
        </span><span class="answer-author-name">{{userName}}</span>
    </p>
    <div class="answer-detail" >
        <div class="markdown-body" v-html="content">
        </div>
    </div>
    <div class="answer-operation">
        <button class="answer-btn answer-agree" @click="handleAgree">{{agreeCount}}</button>
        <button class="answer-btn answer-against" @click="handleAgainst"></button>
        <span class="answer-record">{{record}}</span>
        <span class="answer-comment">发布评论</span>
    </div>
    <div class="answer-comments">
        <ul>
            <!-- <li v-for="comment in comments"></li> -->
        </ul>
        <div>
            
        </div>
    </div>
</div>
</template>

<script>

export default {

    name: 'Answer',
    components: {
    },
    data () {
        return {
        };
    },
    props: ['userName', 'avatarUrl', 'content', 'updateTime', 'againstCount', 'agreeCount', 'commentCount', 'createTime', 'answerId', 'questionId'],
    computed: {
        record() {
            let createTime = new Date(this.createTime);
            let updateTime = new Date(this.updateTime);
            let preStr = createTime.getTime() === updateTime.getTime() ? '发布于' : ' 编辑于';

            return `${preStr} ${updateTime.getFullYear()}-${updateTime.getMonth() + 1}-${updateTime.getDate()}`;
        }
    },
    methods: {
        handleAgree() {

        },
        handleAgainst() {

        }
    }
};
</script>

<style lang="less">
.answer {
    font-size: 14px;
    color: #333;
    line-height: 1.5;
    padding: 10px 0; 
    &-author {
        height: 30px;
        line-height: 30px;
        &-icon {
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border-radius: 50% 50%;
        }
        &-name {
            margin-left: 10px;
        }
    }
    &-detail {
        padding: 20px 0;
    }
    &-time {
        color: #999;
    }
    &-operation {
        color:#999;
        .answer-btn {
            // display: inline-block;
            border: none;
            text-align: center;
            line-height: 26px;
            background: #e3edf8;
            color: #1d78c1;
            padding: 0 10px;
            height: 26px;
            border-radius: 2px;
            &:hover {
                background: #e4ebf3;
            }
            &:before {
                display: inline-block;
                content: ' ';
                width: 0;
                height: 0;
                border-top: 0px solid transparent;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 0px solid transparent;
            }
        }
        .answer-agree {
            &:before {
                border-bottom: 8px solid #247cc3;
                margin-right: 4px;
            }
        }
        .answer-against {
            &:before {
                border-top: 8px solid #247cc3;
            }
        }
        .answer-record {
            margin: 0 15px;
        }
        .answer-comment {
            padding-left: 20px;
            background-image: url('./images/comment.png');
            background-repeat: no-repeat;
            background-position: left center; 
        }
    }
    &-comments {
    }
}
</style>
