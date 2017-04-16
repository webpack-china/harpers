/*
* @Author: lizhonghui
* @Date:   2017-04-15 13:27:25
* @Last Modified by:   leo
* @Last Modified time: 2017-04-16 12:06:00
*/

function commonSuccessHandler(res) {
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

export { commonSuccessHandler, commonErrorHandler };
