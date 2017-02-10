import Base from './base';

export default class extends Base {
  addUser(type, userInfo, ip) {
    let create_time = think.datetime();
    let user = {
      name: userInfo.login,
      nickname: userInfo.name,
      email: userInfo.email,
      github: userInfo.login,
      create_time,
      create_ip: ip,
      last_login_time: create_time,
      last_login_ip: ip
    };

    return this.where({
      name: user.name, 
      email: user.email, 
      _logic: 'OR'
    }).thenAdd(user);
  }
}