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
  postAction() {
    let data = this.post();
    let user_id = this.userInfo.id;
    let content = marked(data.markdown_content);

    let question = think.extend({
      content,
      user_id
    }, data);
    this.modelInstance.addQuestion(question, this.ip());
  }
}