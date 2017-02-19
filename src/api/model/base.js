'use strict';
/**
 * model
 */
export default class extends think.model.relation {

  /**
   * add question and answer log
   */
   log(data) {
     let {content} = data;
     data.content = JSON.stringify(content);
     return this.model('question_answer_log').add(data);
   }

   /**
    * add operation log 
    */
   addScore(data) {
     return this.model('operation_log').add(data);
   }
}