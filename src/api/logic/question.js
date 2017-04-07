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
   * @api {POST} /question/:question_id/against_count 反对问题
   * @apiGroup  Question
   * @apiVersion 0.0.1
   */
  /**
   * @api {POST} /question/:question_id/agree_count 赞同问题
   * @apiGroup  Question
   * @apiVersion 0.0.1
   */
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
   * @api {PUT} /question/:id 更新问题
   * @apiGroup  Question
   * @apiVersion  0.0.1
   * 
   * @apiParam  {String}  title 问题标签
   * @apiParam  {String[]}  tag 问题标签
   * @apiParam  {String}  markdown_content  问题内容
   */
  /**
   * @api {PUT} /question/:id?status=hidden 隐藏问题
   * @apiGroup  Question
   * @apiVersion  0.0.1
   */
  /**
   * @api {PUT} /question/:id?status=closed 关闭问题
   * @apiGroup  Question
   * @apiVersion  0.0.1
   */
  putAction() {
    this.postAction();
    this.rules.status = 'in:closed,hidden'
  }

  /**
   * @api {POST} /question/:question_id/against_count 取消反对问题
   * @apiGroup  Question
   * @apiVersion 0.0.1
   */  
  /**
   * @api {DELETE} /question/:question_id/agree_count 取消赞同问题
   * @apiGroup  Question
   * @apiVersion 0.0.1
   */
  deleteAction() {

  }
}