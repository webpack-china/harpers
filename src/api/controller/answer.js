import Base from './base';
import marked from 'marked';

export default class extends Base {
  /**
   * init
   * @param  {Object} http []
   * @return {}      []
   */
  init(http){
    super.init(http);
  }

  /**
   * answer a question
   */
  async postAction() {
    let {question_id} = this.get();
    let {markdown_content} = this.post();
    let user_id = this.userInfo.id;
    let content = marked(markdown_content);

    let answer = {
      user_id,
      question_id,
      markdown_content,
      content
    };
    
    try {
      let answer_id = await this.modelInstance.addAnswer(answer, this.ip());
      return this.success(answer_id);
    } catch(e) {
      return this.fail(e.message);
    }
  }

  /**
   * update a answer
   */
  async putAction() {
    let {question_id, answer_id, status} = this.get();
    let user_id = this.userInfo.id;

    if(status ) {
      try {
        switch(status) {
          case 'hidden':
            await this.modelInstance.hideAnswer(questiion_id, answer_id, user_id);
            break;
          case 'accept':
            await this.modelInstance.acceptAnswer(question_id, answer_id, user_id);
            break;
        }
        return this.success();
      } catch(e) {
        return this.fail(e.message);
      }
    }

    return this.updateAnswerContent();
  }

  async updateAnswerContent() {
    let {question_id, answer_id} = this.get();
    let {markdown_content} = this.post();
    let user_id = this.userInfo.id;
    let content = marked(markdown_content);

    let answer = {
      question_id,
      answer_id,
      user_id,
      markdown_content,
      content
    };

    try {
      await this.modelInstance.updateAnswerContent(answer, this.ip());
      return this.success();
    } catch(e) {
      return thia.fail(e.message);
    }
  }
}