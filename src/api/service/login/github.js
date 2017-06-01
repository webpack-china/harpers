import querystring from 'querystring';
import request from 'request-promise';

const GITHUB_AUTH_URL = 'https://github.com/login/oauth';
const GITHUB_API_URL = 'https://api.github.com';

export default class extends think.service.base {
  constructor(config) {
    super(config);

    let {client_id, client_secret, redirect_uri} = config;
    if( !client_id || !client_secret || !redirect_uri ) {
		  throw Error('client_id, client_secret, redirect_uri is required');
    }

    for(let i in config) { this[i] = config[i]; }
    if( !this.scope ) { this.scope = 'user'; }
  }

  /**
   * pack authorize url
   */
  getAuthorizeUrl() {
    let params = querystring.stringify({
      client_id: this.client_id,
      redirect_url: this.redirect_uri,
      scope: this.scope,
      state: this.state || ''
    });
    return `${GITHUB_AUTH_URL}/authorize?${params}`;
  }

  /**
   * get access token
   */
  getAccessToken(code) {
    let data = {
      client_id: this.client_id,
      client_secret: this.client_secret,
      redirect_uri: this.redirect_uri,
      code
    };
    if( this.state ) { data.state = this.state; }

    return request.post({
      url: `${GITHUB_AUTH_URL}/access_token`,
      headers: { 'Accept': 'application/json' },
      form: data,
      json: true
    }).then(resp => resp.access_token);
  }

  /**
   * get user info
   */
  async getUserInfo(req) {
    let {code} = req.get();
    if( !code ) {
      return req.redirect(this.getAuthorizeUrl());
    }

    let accessToken = await this.getAccessToken(code);
    return request.get({
      url: `${GITHUB_API_URL}/user`,
      headers: {
        'User-Agent': 'via harpers',
        'Authorization': `token ${accessToken}`
      },
      json: true
    });
  }

  /**
   * sign up user
   */
  async signUp(req) {
    let userInfo = await this.getUserInfo(req);
    let user = {
      name: userInfo.login,
      nickname: userInfo.name,
      avatar_url: userInfo.avatar_url,
      email: userInfo.email,
      github: userInfo.login
    };
    let res = await req.model('user').addUser(user, req.ip());
    // res = { id: 1, type: "exist" }
    return res.id;
  }

  /**
   * login
   */
  async signIn(req) {
    let user = await this.getUserInfo(req);
    user = await req.model('user').where({name: user.login, email: user.email}).find();
    return user;
  }
}
