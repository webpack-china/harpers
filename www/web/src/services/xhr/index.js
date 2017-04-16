/*
* @Author: leo
* @Date:   2017-04-16 12:06:00
* @Last Modified by:   leo
* @Last Modified time: 2017-04-16 12:06:00
*/

var xhr = require('./http').default;

/**
 * XHR 请求接口定义
 * @param  {String} options.method  请求方法（默认为 get）
 * @param  {String} options.url     请求路径
 * @param  {Object} options.params  请求体
 * @return {Promise}
 *
 * API 封装格式为 {}
 */
export default xhr;
