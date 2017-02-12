'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction(){
   
  }
  
  /**
   * @api {GET} /user 获取用户列表
   * @apiGroup User
   * @apiVersion 0.0.1
   */
  /**
   * @api {GET} /user/:id 获取用户信息
   * @apiGroup User
   * @apiVersion 0.0.1
   */
  getAction() {

  }

  /**
   * @api {POST} /user 用户注册
   * @apiGroup User
   * @apiVersion 0.0.1
   * @apiSampleRequest off
   * @apiDescription 第三方账号注册需要跳转，非纯接口形式
   * 
   * @apiParam  {String}  [type="github"] 第三方注册类型
   */
  postAction() {
    this.rules = {
      type: 'string|required|in:github|default:github'
    }
  }

  /**
   * update user info
   */
  putAction() {

  }

  /**
   * user write off
   */
  deleteAction() {
    
  }
}