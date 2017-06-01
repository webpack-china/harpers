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
   * registry user and login
   */
  async postAction() {
    let {type, code} = this.get();
    let LoginService = think.service('login/' + this.get('type'), 'api');
    let login = new LoginService(this.config('login')[type]);

    try {
      let userId = await login.signUp(this);
      this.http._userId = userId;
      this.http.cookie('user_id', userId);
      return this.action('token', 'post');
    } catch(e) {
      return this.fail( e.message );
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
  async deleteAction() {
    return super.deleteAction();
  }
}
