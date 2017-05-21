<template>
    <div class="wrap-bg">
        <div class="container">
            <div class="interactive-wrap">
                <section class="search-section">
                    <div class="logo-box">
                        <img src="./images/logo.png" alt="logo">
                    </div>
                    <div class="search-box">
                        <Search :placeholder="'你想知道的，从这里开始'"></Search>
                        <a href="javascript:;" class="search-btn"></a>
                    </div>
                    <p class="summary">致力于提供前端工程化方案的问答社区</p>
                </section>
                <section class="selection-section">
                    <h1 class="selection-header">精选问答</h1>
                    <div class="selection-content">
                        <div class="selection-item" v-for="item in sliceQuesions">
                            <Question :qt="item"></Question>
                        </div>
                        <router-link to="detail" class="more-qustions">更多问答</router-link>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import { Question, Search } from 'Components';

    export default {
        name: 'home',
        data () {
            return {

            };
        },
        mounted () {
            this.getSelectedQts();
        },
        methods: {
            ...mapActions([
                'getSelectedQts'
            ])
        },
        computed: {
            ...mapState({
                quesions: function (state) {
                    return state.Home.quesions;
                }
            }),
            ...mapGetters([
                'sliceQuesions'
            ])
        },
        components: { Question, Search }
    };
</script>

<style lang="less" scope>
    .wrap-bg {
        background-color: #2c3a42;
    }
    .interactive-wrap {
        background-color: #2c3a42;
        .search-section {
            padding: 100px 0px;
        }
        .logo-box {
            margin-bottom: 60px;
            text-align: center;
        }
        .search-box {
            position: relative;
            padding: 3px 20px;
            margin: 0 auto;
            max-width: 700px;
            width: 70%;
            background-color: #465e69;
            border: 1px solid #7fa0b2;
            border-radius: 30px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        }
        .summary {
            margin-top: 35px;
            text-align: center;
            color: #fff;
        }
        .search-input {
            padding-right: 140px;
            width: 100% !important;
            height: initial !important;
            color: #fff;
            background:#465e69;
            font-size: 24px;
            border: 0;
            transition: border-color .3s ease;
            &::-webkit-input-placeholder { /* WebKit browsers */
                color: #7fa0b2;
            }
            &::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: #7fa0b2;
            }
            &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: #7fa0b2;
            }
            &::-ms-input-placeholder { /* Internet Explorer 10+ */
                color: #7fa0b2;
            }
        }
        .search-btn {
            height: 30px;
            width: 30px;
            background-image: url('./images/search.png');
            background-size: 100%;
            vertical-align: middle;
            -ms-flex-item-align: center;
            -ms-grid-row-align: center;
            align-self: center;
        }
        .selection-section {

        }
        .selection-header {
            margin: auto;
            margin-bottom: 40px;
            color: #dee4e5;
            font-size: 24px;
        }
        .selection-content {
            padding-bottom: 20px;
        }
        .selection-item {
            margin: auto;
            padding: 0 20px;
            margin-bottom: 20px;
            background-color: #fff;
            box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
            border-radius:6px;
            .h-q-wrap {
                max-width: 100%;
            }
        }
        .more-qustions {
            display: block;
            margin: 0 auto;
            width: 100px;
            height: 30px;
            line-height: 30px;
            color: #000;
            background-color: #fff;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            &:hover {
                text-decoration: underline;
            }
        }
        .h-search {
            display: block;
            width: 92%;
            height: initial;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            overflow: hidden;
        }
        .h-question {
            border-bottom: none;
        }
    }
</style>
