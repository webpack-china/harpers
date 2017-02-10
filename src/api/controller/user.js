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
   * get user
   */
  getAction() {
    return super.getAction();
  }

  /**
   * registry user
   */
  async postAction() {
    let {type, code} = this.get();
    let LoginService = think.service('login/' + this.get('type'), 'api');
    let login = new LoginService(this.config('login')[type]);

    if( !code ) {
      return this.redirect(login.getAuthorizeUrl());
    }

    try {
      let accessToken = await login.getAccessToken(code);
      let user = await login.getUserInfo(accessToken);

      let res = await this.modelInstance.addUser(type, user, this.ip());
      return this.success(res.id);
    } catch(e) {
      return this.fail( e.message);
    }
  }

  /**
   * update user info
   */
  putAction() {
    return super.putAction();
  }

  /**
   * user write off
   */
  deleteAction() {
    return super.deleteAction();
  }
}