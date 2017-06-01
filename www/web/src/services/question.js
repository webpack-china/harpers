/*
* @Author: lizhonghui
* @Date:   2017-04-15 13:27:25
* @Last Modified by:   leo
* @Last Modified time: 2017-04-16 13:00:00
*/

'use strict';

import xhr from './xhr';

/**
 * 提问页所用到的http service
 */
class QustionService {
    /**
     * 获取问答列表
     * @return {Promise}
     */
    getQuestions (params) {
        return xhr({
            method: 'get',
            url: '/question',
            params: params
        });
    };
    /**
     * 提交问答
     * @return {Promise}
     */
    addQuestion (params) {
        return xhr({
            method: 'post',
            url: '/question',
            params: params
        });
    }
}

// 实例化后导出，全局单例
export default new QustionService();


