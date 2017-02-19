import Base from './base';

export default class extends Base {
  relation = {
    tag: think.model.MANY_TO_MANY,
    user: think.model.BELONG_TO,
    answer: think.model.HAS_MANY,
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
}