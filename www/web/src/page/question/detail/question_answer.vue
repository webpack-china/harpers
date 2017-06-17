<template>
<div class="answer"> 
    <p class="answer-author">
        <span class="answer-author-icon"></span><span class="answer-author-name">大萝卜</span>
    </p>
    <div class="answer-detail" >
        <div class="markdown-body" v-html="answer">
            
        </div>
    </div>
    <p class="answer-time">發佈于 2017-03-08</p>
    <div class="answer-operation">
        <span class="answer-comment">发布评论</span>
    </div>
    <div class="answer-comments">
        <ul>
            <li v-for="comment in comments"></li>
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
            answer: '<h1 id="asd">asd</h1> <p>打算的 阿萨德</p> <h2 id="-">阿萨德</h2> <h3 id="-">阿萨德阿萨德就阿萨德</h3>'
        };
    },

    props: {
        comments: {
            type: Array,
            default: () => []
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
