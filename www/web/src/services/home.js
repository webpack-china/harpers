/*
* @Author: leo
* @Date:   2017-04-16 12:06:00
* @Last Modified by:   leo
* @Last Modified time: 2017-04-16 12:06:00
*/

import xhr from './xhr';

/**
 * 首页所用到的http service
 */
class HomeService {
    /**
     * 获取精选问答列表
     * @return {Promise}
     */
    getList (params) {
        return xhr({
            method: 'get',
            url: '/question'
        });
    }
}

// 实例化后导出，全局单例
export default new HomeService();
