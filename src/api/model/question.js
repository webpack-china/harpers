import Base from './base';

export default class extends Base {
  relation = {
    tag: think.model.HAS_MANY,
    user: think.model.HAS_ONE,
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

      await this.addlog({
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
    } catch(e) {
      await this.rollback();
      throw Error(e.message);
    }
  }
}