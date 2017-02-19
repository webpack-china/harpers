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
   * add new question
   */
  async postAction() {
    let data = this.post();
    let user_id = this.userInfo.id;
    let content = marked(data.markdown_content);

    let question = think.extend({
      content,
      user_id
    }, data);
    
    try {
      let question_id = await this.modelInstance.addQuestion(question, this.ip());
      return this.success(question_id);
    } catch(e) {
      return this.fail(e.message);
    }
  }

  /**
   * update question
   */
  async putAction() {
    if( !this.id ) {
      return this.fail();
    }

    let data = this.post();
    let user_id = this.userInfo.id;
    let content = marked(data.markdown_content);
    
    data.tag = data.tag.split(/\s*,\s*/).map(tag_id => ({tag_id}));
    let question = think.extend({
      content,
      update_user_id: user_id
    }, data);

    try {
      await this.modelInstance.updateQuestion(this.id, question, this.ip());
      return this.success();
    } catch(e) {
      return this.fail(e.message);
    }
  }
}