/*
* @Author: lizhonghui
* @Date:   2017-04-15 13:27:25
* @Last Modified by:   lizhonghui
* @Last Modified time: 2017-04-15 15:27:29
*/

'use strict';

import axios from 'axios';

let instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
});

function commonHandler(res) {
    if (res.status === 200) {
        return res.data;
    } else {
        return {
            errno: -1,
            errmsg: '接口返回有误，请重试'
        };
    }
}

function commonErrorHandler(err) {
    if (err.response) {
        return err.response.data;
    } else {
        return {
            errno: -1,
            errmsg: '接口请求失败，请重试'
        };
    }
}

export function addQuestion(title, mdContent, tag) {
    return instance.post('/question', {
        title,
        tag,
        markdown_content: mdContent
    })
    .then(commonHandler)
    .catch(commonErrorHandler);
}

