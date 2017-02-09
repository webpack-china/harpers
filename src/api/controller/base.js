'use strict';

export default class extends think.controller.rest {
  /**
   * some base method in here
   */
  constructor(...args) {
    super(...args);
    this._method = "_method";
  }
}