import Base from './base';

export default class extends Base {
  async addAnswer(answer, ip) {
    let create_time = think.datetime();
    answer = think.extend({
      create_time,
      create_ip: ip,
      update_time: create_time,
      update_ip: ip,
      status: 0
    }, answer);

    try {
      await this.startTrans();
      let answer_id = await this.add(answer);

      await this.log({
        question_id: answer.question_id,
        answer_id,
        user_id: answer.user_id,
        content: answer,
        create_time,
        ip
      });

      await this.addScore(think.extend({
        question_id: answer.question_id,
        answer_id,
        user_id: answer.user_id
      }, OP.ANSWER.ADD));

      await this.commit();

      return answer_id;
    } catch(e) {
      await this.rollback();
      throw e;
    }
  }

  async updateAnswerContent(answer, ip) {
    let update_time = think.datetime();
    let {question_id, answer_id, user_id} = answer;
    answer = think.extend({
      update_time,
      update_ip: ip
    }, answer);

    try {
      await this.startTrans();
      await this.where({question_id, answer_id}).update(answer);
      await this.log({
        question_id,
        answer_id,
        user_id,
        content: answer,
        create_time: update_time,
        ip
      });
      await this.addScore(think.extend({
        question_id,
        answer_id,
        user_id
      }, OP.ANSWER.UPDATE));
      await this.commit();
      return true;
    } catch(e) {
      await this.rollback();
      throw e;
    }
  }
}