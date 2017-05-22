/*
* @Author: leo
* @Date:   2017-05-22 23:35:00
* @Last Modified by:   leo
* @Last Modified time: 2017-05-22 23:35:00
*/

import xhr from './xhr';

/**
 * 搜索页面所用到的http service
 */
class UserService {
    /**
     * 获取搜索结果
     * @return {Promise}
     */
    getSearchResults (params) {
        return xhr({
            method: 'get',
            url: '/search',
            params: params
        });
    }
}

// 实例化后导出，全局单例
export default new UserService();
