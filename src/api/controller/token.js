import Base from './base';

export default class extends Base {
  init(http){
    super.init(http);
  }

  /**
   * login
   */
  async postAction() {
    try {
      let user,
          userId = this.http._userId;

      if( userId ) {
        user = await this.model('user').where({id: userId}).find();
      } else {
        let {type} = this.get();
        let LoginService = think.service('login/' + type, 'api');
        let login = new LoginService(this.config('login')[type]);
        
        user = await login.signIn(this);
      }
      
      if( think.isEmpty(user) ) {
        return this.fail('ACCOUNT_ERROR');
      }

      if( user.status === USER_STATUS.FORBIDDEN ) {
        return this.fail('ACCOUNT_FORBIDDEN');
      }

      await this.session('userInfo', user);
      return this.success();
    } catch(e) {
      return this.fail(e.message);
    }
  }

  /**
   * logout
   */
  async deleteAction() {
    await this.session('userInfo', '');
    return this.success();
  }
}