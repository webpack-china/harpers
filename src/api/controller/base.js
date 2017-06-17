'use strict';

export default class extends think.controller.rest {
  
  allowList = ['api/token/post', 'api/user/post'];

  constructor(...args) {
    super(...args);
    this._method = '_method';
  }

  async getAction(...args){
    let data;

    if (this.id) {
      let pk = await this.modelInstance.getPk();
      data = await this.modelInstance.where({[pk]: this.id}).find();
      return this.success(data);
    }else{
      let page = this.get('page') || 1;

      data = await this.modelInstance.page(page, 20).countSelect();
    }
    return this.success(data);
  }

  async __before() {
    // register or login check
    let name = this.http.module + '/' + this.http.controller + '/' + this.http.action;
    if( this.allowList.indexOf(name) > -1 ) {
      return;
    }
    // session
    let userInfo = await this.session('userInfo') || {};
    if( think.isEmpty(userInfo) ) {
      return this.fail('USER_NOT_LOGIN');
    }
    
    let type = userInfo.type | 0;
    if( type === USER_TYPE.NORMAL && this.http.controller === this.config('console') ) {
      return this.fail('USER_NO_PERMISSION');
    } 

    this.userInfo = userInfo;
  }
}