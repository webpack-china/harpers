<template>
<div class="question-detail">

    <Tags :tags="tags"></Tags>
    <div class="h-q-content">
        <p class="h-q-content-title">在antd的Table组件的column中有ref，但是却取不到Dom对象？</p>
        <p class="h-q-content-detail">在这场战斗前，我们压抑的情绪积累到顶点，那些砍瓜切菜的镜头，既是对人物迟暮英雄主义不可或缺的能量补充， 也是观众情绪一次势在必行的释放。 没有它，那份“虽千万人，吾往矣”的悲壮将大打折扣。 “暴力”对《金刚狼3》绝不是噱头，是血肉。 被枪打烂的侧脸、皮开肉绽的伤疤、一刀落地的脑袋……这些儿童不宜的镜头，是推动剧情和刻画人物的必备因素。 这也是《金刚狼3》在国外被大面积叫好的原因。
        <span class="btn btn-text" v-if="true">{{btnText}}</span>
        </p>
    </div>
    <div class="btn">写回答</div>

</div> 
</template>

<script>
import { Tags } from 'Components';

export default {

    name: 'QuestionDetail',
    components: {
        Tags
    },
    data () {
        return {
            tags: ['html5', 'javascript'],
            expand: false
        };
    },
    computed: {
        btnText() {
            return this.expand ? '收起' : '展示全部';
        }
    }
};
</script>

<style lang="less">
.h-q-content {
    font-size: 14px;
    color: #333;
    &-title {
        font-size: 24px;
    }
    &-detail {

    }
}
.btn-text {
    display: inline-block;
}
</style>
