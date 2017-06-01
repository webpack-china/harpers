/*
* @Author: leo
* @Date:   2017-05-15 19:24:00
* @Last Modified by:   leo
* @Last Modified time: 2017-05-15 19:24:00
*/

import xhr from './xhr';

/**
 * 用户所用到的http service
 */
class UserService {
    /**
     * 获取用户信息
     * @return {Promise}
     */
    getUser (params) {
        return xhr({
            method: 'get',
            url: '/user',
            params: params
        });
    }
}

// 实例化后导出，全局单例
export default new UserService();
