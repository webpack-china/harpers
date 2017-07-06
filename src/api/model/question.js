import Base from './base';

export default class extends Base {
  relation = {
    tag: think.model.MANY_TO_MANY,
    user: think.model.BELONG_TO,
    answer: {
      type: think.model.HAS_MANY,
      page: [1, 10]
    },
    comment: think.model.HAS_MANY
  }
  
  /**
   * question add and log
   */
  async addQuestion(question, ip) {
    let create_time = think.datetime();
    question = think.extend({
      create_time, 
      create_ip: ip,
      update_time: create_time,
      update_ip: ip,
      status: 0
    }, question);
    try {
      await this.startTrans();
      let question_id = await this.add(question);
      
      await this.log({
        question_id,
        user_id: question.user_id,
        answer_id: null,
        content: question,
        create_time,
        ip
      });

      await this.addScore(think.extend({
        question_id,
        user_id: question.user_id
      }, OP.QUESTION.ADD));
      
      await this.commit();

      return question_id;
    } catch(e) {
      await this.rollback();
      throw e;
    }
  }

  /**
   * update question and log
   */
  async updateQuestion(question_id, question, ip) {
    let update_time = think.datetime();
    let {update_user_id} = question;

    question = think.extend({
      update_time,
      update_ip: ip
    }, question);

    try {
      await this.startTrans();
      await this.where({id: question_id}).update(question);

      await this.log({
        question_id,
        user_id: update_user_id,
        answer_id: null,
        content: question,
        create_time: update_time,
        ip
      });
  
      await this.addScore(think.extend({
        question_id,
        user_id: update_user_id
      }, OP.QUESTION.UPDATE));
      
      await this.commit();
    } catch(e) {
      await this.rollback();
      throw e;
    }
  }

  /**
   * hide qustion
   */
  hideQuestion(question_id, user_id) {
    return this.updateQuestionStatus(
      question_id, 
      user_id, 
      QUESTION_STATUS.HIDE, 
      OP.QUESTION.HIDE
    );
  }

  /**
   * close question
   */
  closeQuestion(question_id, user_id) {
    return this.updateQuestionStatus(
      question_id,
      user_id,
      QUESTION_STATUS.CLOSE,
      OP.QUESTION.CLOSE
    );
  }

  /**
   * delete question
   */
  async deleteQuestion(question_id, user_id) {
    try {
      await this.startTrans();
      await this.delete({id: question_id});
      await this.addScore(think.extend({
        question_id, 
        user_id
      }, OP.QUESTION.DELETE));
      await this.commit();
    } catch(e) {
      await this.rollback();
      throw e;
    }
  }

  async updateQuestionStatus(question_id, user_id, status, op) {
    try {
      await this.startTrans();
      await this.where({id: question_id}).update({status});
      await this.addScore(think.extend({
        question_id,
        user_id,
      }, op));
      await this.commit();
    } catch(e) {
      await this.rollback();
      throw e;
    }
  }
}