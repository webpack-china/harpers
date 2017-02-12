'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {

  /**
   * @api {POST} /token 用户登陆
   * @apiGroup User
   * @apiVersion 0.0.1
   * @apiSampleRequest off
   * @apiDescription 第三方登陆需要跳转，非纯接口形式
   * 
   * @apiParam  {String}  [type="github"] 第三方注册类型
   */
  postAction() {
    this.rules = {
      type: 'string|required|in:github|default:github'
    };
  }

   /**
   * @api {DELETE} /token 用户登出
   * @apiGroup User
   * @apiVersion 0.0.1
   * @apiSampleRequest off
   * 
   */ 
  deleteAction() {

  }
}