<template>
<div class="h-question">
    <div class="h-q-wrap">
        <div class="h-q-meta">
            <div class="h-q-meta-wrap h-q-meta-scan">
                <p class="h-q-meta-num">{{ qt.comment_count }}</p>
                <p class="h-q-meta-txt">回答</p>
            </div>
            <div class="h-q-meta-wrap h-q-meta-answer">
                <p class="h-q-meta-num">{{ qt.agree_count }}</p>
                <p class="h-q-meta-txt">同意</p>
            </div>
        </div>
        <div class="h-q-content">
            <h2 class="h-q-content-title">
                <router-link class="h-q-content-title-link" :to="{ name: 'question_detail', 
                params: { id: qt.id } }">{{ qt.title }}</router-link>
            </h2>
            <p class="h-q-content-detail">{{ qt.content }}</p>
            <div class="h-q-content-tags">
                <div class="h-q-content-tag" v-for="tag in qt.tag">{{ tag.name }}</div>
            </div>
            <p class="h-q-content-meta" v-if="qt.comment.length === 0">{{ qt.update_time }} 分钟前提问</p>
            <p class="h-q-content-meta" v-else-if="qt.comment.length !== 0">{{ qt.comment[0].update_time }} 分钟前回答</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        qt: {
            required: true,
            type: Object,
            default: {}
        }
    },
    data () {
        return {

        };
    }
};
</script>

<style lang="less">
.h-question {
    font-size: 12px;
    .h-q-wrap {
        display: flex;
        flex-direction: row;
        max-width: 700px;
        background: #fff;
        color: #999;
        p {
            margin: 0;
        }
        .h-q-meta {
            text-align: center;
            border: 1px solid #eaeaea;
            .h-q-meta-wrap {
                padding: 7px 20px;
                height: 50%;
            }
            p {
                margin: 0;
                white-space: nowrap;
            }
            .h-q-meta-scan {
                .h-q-meta-num {
                    color:#47aa2c;
                    font-size: 20px;
                }
            }
            .h-q-meta-answer {
                background: #f4f4f4;  
            }
        }
        .h-q-content {
            position: relative;
            color: #999;
            min-width: 0px;
            padding-left: 20px; 
            .h-q-content-title {
                color: #000;
                font-size: 16px;
                margin-top: 6px;
                margin-bottom: 12px;
            }
            .h-q-content-title-link {
                color: #333;
                text-decoration: none;
                &:hover {
                    color: #2B3A42;
                    text-decoration: underline;
                }
            }
            .h-q-content-detail {
                font-size: 14px;
                margin-bottom: 20px;
                overflow: hidden;
                white-space: nowrap;
                margin-right: 10px;
                text-overflow: ellipsis;
            }
            .h-q-content-tags {
                display: flex;

                .h-q-content-tag {
                    margin: 0 6px;
                    padding: 5px 13px;
                    color: #fff;
                    background: #7dccf7;
                    border-radius: 15px;
                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
            .h-q-content-meta {
                position: absolute;
                top: 6px;
                right: 10px;
                font-size: 14px;
            }
        }
    }
}
</style>
