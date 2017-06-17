'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * @api {GET} /question/:question_id/answers  获取问题回答
   * @apiParam  {String}  page 当前页数，缺省值为1
   * @apiGroup  Answer
   * @apiVersion  0.0.1
   */
  getAction() {

  }

  /**
   * @api {POST} /question/:question_id/answer/:answer_id/against_count 反对回答
   * @apiGroup  Answer
   * @apiVersion 0.0.1
   */
  /**
   * @api {POST} /question/:question_id/answer/:answer_id/agree_count 赞同回答
   * @apiGroup  Answer
   * @apiVersion 0.0.1
   */
  /**
   * @api {POST} /question/:question_id/answer 新增回答
   * @apiGroup Answer
   * @apiVersion 0.0.1
   * 
   * @apiParam  {String}  markdown_content 答案内容
   */
  postAction() {
    this.rules = {
      // question_id: 'int|required',
      // markdown_content: 'string|required'
    };
  }

  /**
   * @api {PUT} /question/:question_id/answer/:answer_id  更新回答
   * @apiGroup  Answer
   * @apiVersion  0.0.1
   * 
   * @apiParam  {String}  markdown_content  答案内容
   */
  /**
   * @api {PUT} /question/:question_id/answer/:answer_id  采纳，取消，隐藏答案
   * @apiGroup  Answer
   * @apiVersion  0.0.1
   * 
   * @apiParam  {String=accept,cancel,hidden}  status
   */
  putAction() {
    this.rules = {
      question_id: 'int|required',
      answer_id: 'int|required',
      markdown_content: 'string|required',
      status: 'required|in:hidden,accept,cancel,close'
    };
  }

  /**
   * @api {DELETE} /question/:question_id/answer/:answer_id/against_count 取消反对回答
   * @apiGroup  Answer
   * @apiVersion 0.0.1
   */
  /**
   * @api {DELETE} /question/:question_id/answer/:answer_id/agree_count 取消赞同回答
   * @apiGroup  Answer
   * @apiVersion 0.0.1
   */
  deleteAction() {

  }
}