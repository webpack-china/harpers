import Base from './base';

export default class extends Base {
  addUser(userInfo, ip) {
    let create_time = think.datetime();
    let user = think.extend({
      create_time,
      create_ip: ip,
      last_login_time: create_time,
      last_login_ip: ip
    }, userInfo);
    
    return this.where({
      name: user.name, 
      email: user.email, 
      _logic: 'OR'
    }).thenAdd(user);
  }
}