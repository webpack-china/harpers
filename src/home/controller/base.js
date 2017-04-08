'use strict';

export default class extends think.controller.base {
  /**
   * before
   */
  __before(){
  }
  /**
   * call magic method
   * @return {} []
   */
  __call(){
    return this.display('index/index');
  }
}