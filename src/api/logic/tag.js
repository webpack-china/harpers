'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * @api {GET} /tag  获取标签列表
   * @apiGroup Tag
   * @apiVersion  0.0.1
   */
  /**
   * @api {GET} /tag/:id  获取标签
   * @apiGroup  Tag
   * @apiVersion  0.0.1
   */
  getAction() {

  }
  
  /**
   * @api {POST}  /tag  添加标签
   * @apiGroup Tag
   * @apiVersion  0.0.1
   * 
   * @apiParam  {String}  name  标签名称
   * @apiParam  {String}  [description] 标签描述
   */
  postAction() {
    this.rules = {
      name: 'string|required',
      description: 'string'
    }
  }

  /**
   * @api {PUT} /tag/:id  修改标签
   * @apiGroup  Tag
   * @apiVersion  0.0.1
   * 
   * @apiParam  {String}  name  标签名称
   * @apiParam  {String}  [description] 标签描述
   */
  putAction() {
    this.rules = {
      name: 'string|required',
      description: 'string'
    }
  }

  /**
   * @api {DELETE}  /tag/:id  删除标签
   * @apiGroup  Tag
   * @apiVersion  0.0.1
   */
  deleteAction() {

  }
}