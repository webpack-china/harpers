<template>
<div class="question-detail">
    <div class="question-detail-wrap" :class="classes">
        <Tags :tags="tag" v-show="tag.length != 0"></Tags>
        <div class="h-q-content">
            <p class="h-q-content-title">{{title}}</p>
            <div class="h-q-content-detail">
                <span class="h-q-content-wrap" v-html="content"></span>
                <!-- <span class="btn btn-text" v-show="true" @click ="handleExpand">{{btnText}}</span> -->
            </div>
        </div>
        <btn :width="80" class="btn-write" type="primary">写回答</btn>
    </div>
</div> 
</template>

<script>
import { Tags, Button } from 'Components';

export default {

    name: 'QuestionDetail',
    components: {
        Tags,
        Btn: Button
    },
    data () {
        return {
            expand: true,
        };
    },
    props: ['tag', 'title', 'content', 'summary'],
    computed: {
        btnText() {
            return this.expand ? '收起' : '展示全部';
        },
        classes() {
            return !this.summary ? '' : 'question-summary';
        }
    },
    methods: {
        handleExpand() {
            this.expand = !this.expand;
        }
    },
    mounted() {

    }
};
</script>

<style lang="less">
.question-detail {
    background-color: #f7f8fa;
    // box-shadow: 0px 0px 4px 1px #ddd;
}
.question-detail-wrap {
    width: 980px;
    min-height: 120px;
    margin: 0 auto;
    position: relative;
    padding: 30px 0px;
    &.question-summary {
        padding: 10px 0;
        min-height: 30px;
        .h-tags{display: none;}
        .h-q-content-title {margin-bottom: 0;}
        .h-q-content-detail {display: none;}
        .btn-write{
            bottom: 6px;
        }
    }
}
.h-tags {
    margin-bottom: 12px;
}
.h-q-content {
    max-width: 730px;
    font-size: 14px;
    color: #333;
    &-title {
        font-size: 24px;
        margin-bottom: 20px;
    }
    &-detail {
    }
}
.btn-text {
    display: inline-block;
    cursor: pointer;
    color: #999;
}
.btn-write {
    position: absolute;
    right: 0px;
    bottom: 30px;
    a {
        color: #fff;
        text-decoration: none;
    }

    &:hover {
        background: #4397db;
    }
}
</style>
