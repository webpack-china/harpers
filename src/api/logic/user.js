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
  /**
   * @api {GET} /user/:id/followers 获取关注列表
   * @apiGroup  User
   * @apiVersion  0.0.1
   */
  /**
   * @api {GET} /user/:id/followed  获取关注列表
   * @apiGroup  User
   * @apiVersion  0.0.1
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
    /**
     * @api {PUT} /user/:id/follower/:follow_id  新增关注者
     * @apiGroup  User
     * @apiVersion  0.0.1
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
   * @api {DELETE} /user/:id/follower/:follow_id 取消关注
   * @apiGroup  User
   * @apiVersion  0.0.1
   */
  /**
   * user write off
   */
  deleteAction() {
    
  }
}