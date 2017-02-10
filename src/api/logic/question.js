'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  postAction() {
    this.rules = {
      title: 'string|required',
      tag: 'array|required',
      markdown_content: 'string|required'
    };
  }
}