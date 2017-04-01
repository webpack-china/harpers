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
    if( !this.id ) {
      return this.fail();
    }
    
    this.post('pathname', this.post('name'));
    return super.putAction();
  }
}