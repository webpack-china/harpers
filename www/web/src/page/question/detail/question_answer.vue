<template>
<div class="answer"> 
    <p class="answer-author">
        <span class="answer-author-icon"></span><span class="answer-author-name">大萝卜</span>
    </p>
    <p class="answer-detail">在这场战斗前，我们压抑的情绪积累到顶点，那些砍瓜切菜的镜头，既是对人物迟暮英雄主义不可或缺的能量补充， 也是观众情绪一次势在必行的释放。 没有它，那份“虽千万人，吾往矣”的悲壮将大打折扣。 “暴力”对《金刚狼3》绝不是噱头，是血肉。 被枪打烂的侧脸、皮开肉绽的伤疤、一刀落地的脑袋……这些儿童不宜的镜头，是推动剧情和刻画人物的必备因素。 这也是《金刚狼3》在国外被大面积叫好的原因。</p>
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
