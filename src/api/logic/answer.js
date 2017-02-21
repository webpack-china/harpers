'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  getAction() {

  }

  /**
   * @api {POST} /question/:question_id/answer 新增回答
   * @apiGroup Answer
   * @apiVersion 0.0.1
   * 
   * @apiParam  {String}  markdown_content 答案内容
   */
  postAction() {
    this.rules = {
      question_id: 'int|required',
      markdown_content: 'string|required'
    };
  }

  /**
   * @api {PUT} /question/:question_id/answer/:answer_id  更新回答
   * @apiGroup  Answer
   * @apiVersion  0.0.1
   * 
   * @apiParam  {String}  markdown_content  答案内容
   */
  putAction() {
    this.rules = {
      question_id: 'int|required',
      answer_id: 'int|required',
      markdown_content: 'string|required'
    };
  }
}