'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {

  /**
   * login
   */
  postAction() {
    this.rules = {
      type: 'string|required|in:github|default:github'
    };
  }

  /**
   * logout
   */
  deleteAction() {

  }
}