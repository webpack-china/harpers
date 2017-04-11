<template>
    <div class="interactive-wrap">
        <section class="search-section">
            <div class="logo-box">
                <img src="./images/logo.png" alt="logo">
            </div>
            <div class="search-box">
                <input name="search" type="text" placeholder="你想知道的，从这里开始" class="form-control search-input" />
                <a href="javascript:;" class="search-btn"></a>
            </div>
        </section>
        <section class="selection-section">
            <h1 class="selection-header">精选问答</h1>
            <div class="selection-content">
                <div class="selection-item" v-for="i in 4">
                    <Question :qt="{}"></Question>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { Question } from 'Components';

    export default {
        name: 'home',
        data () {
            return {

            };
        },
        mounted () {
            this.init();
        },
        methods: {
            init: function () {
                console.dir('首页数据初始化');
            }
        },
        components: { Question }
    };
</script>

<style lang="less">
    .interactive-wrap {
        background-color: #2c3a42;
        .search-section {
            margin: 100px 0px;
        }
        .logo-box {
            margin-bottom: 60px;
            text-align: center;
        }
        .search-box {
            position: relative;
            padding: 3px 20px;
            margin: 0 auto;
            max-width: 600px;
            width: 55%;
            background:#465e69;
            border: 1px solid #999999;
            border-radius: 30px;
        }
        .search-input {
            display: block;
            padding-right: 140px;
            width: 100%;
            color: #fff;
            background:#465e69;
            font-size: 24px;
            border: 0;
            transition: border-color .3s ease;
        }
        .search-btn {
            position: absolute;
            right: 15px;
            bottom: 9px;
            margin-bottom: 0;
            display: inline-block;
            height: 30px;
            width: 30px;
            background-image: url('./images/search.png');
            background-size: 100%;
        }
        .selection-section {

        }
        .selection-header {
            margin: auto;
            margin-bottom: 40px;
            width: 70%;
            color: #dee4e5;
            font-size: 24px;
        }
        .selection-item {
            margin: auto;
            padding: 20px;
            margin-bottom: 20px;
            background-color: #fff;
            width: 70%;
            box-shadow:0 2px 4px 0 rgba(0,0,0,0.50);
            border-radius:6px;
            .h-q-wrap {
                max-width: 100%;
            }
        }
    }
</style>
