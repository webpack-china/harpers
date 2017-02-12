import Base from './base';

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
   * add new tag
   */
  postAction() {
    this.post('pathname', this.post('name'));
    return super.postAction();
  }

  /**
   * update tag
   */
  putAction() {
    this.postAction('pathname', this.postAction('name'));
    return super.putAction();
  }
}