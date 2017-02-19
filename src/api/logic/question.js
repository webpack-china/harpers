'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * @api {GET} /question 获取问题列表
   * @apiGroup Question
   * @apiVersion 0.0.1
   */
  /**
   * @api {GET} /question/:id 获取问题详情
   * @apiGroup  Question
   * @apiVersion  0.0.1
   */
  getAction() {

  }
  /**
   * @api {POST} /question 新增问题
   * @apiGroup Question
   * @apiVersion 0.0.1
   * 
   * @apiParam  {String}  title 问题标题
   * @apiParam  {String[]}  tag 问题标签
   * @apiParam  {String}  markdown_content 问题内容
   */
  postAction() {
    this.rules = {
      title: 'string|required',
      tag: 'int_arr|required',
      markdown_content: 'string|required'
    };
  }
  /**
   * @api {PUT} /question 更新问题
   * @apiGroup  Question
   * @apiVersion  0.0.1
   * 
   * @apiParam  {String}  title 问题标签
   * @apiParam  {String[]}  tag 问题标签
   * @apiParam  {String}  markdown_content  问题内容
   */
  putAction() {
    this.postAction();
  }
}