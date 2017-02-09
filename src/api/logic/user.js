'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction(){
   
  }
  
  /**
   * get user
   */
  getAction() {

  }

  /**
   * registry user
   */
  postAction() {
    this.rules = {
      type: 'string|required|in:github|default:github'
    }
  }

  /**
   * update user info
   */
  putAction() {

  }

  /**
   * user write off
   */
  deleteAction() {
    
  }
}