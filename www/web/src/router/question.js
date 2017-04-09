/*
* @Author: lizhonghui
* @Date:   2017-04-08 14:20:00
* @Last Modified by:   lizhonghui
* @Last Modified time: 2017-04-08 14:55:31
*/

'use strict';

import {
    QuestionNew,
    QuestionDetail
} from '../page/question';

// 嵌套路由等配置
export default [
    {
        path: '/home/question/new',
        name: 'question_new',
        component: QuestionNew
    },
    {
        path: '/home/question/detail/:id',
        name: 'question_detail',
        component: QuestionDetail
    }
];
