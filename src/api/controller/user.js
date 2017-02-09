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

    let accessToken = await login.getAccessToken(code);
    let user = await login.getUserInfo(accessToken);
    return this.success(user);
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