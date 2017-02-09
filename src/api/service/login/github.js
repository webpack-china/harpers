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
  getUserInfo(token) {
    return request.get({
      url: `${GITHUB_API_URL}/user`,
      headers: {
        'User-Agent': 'via harpers',
        'Authorization': `token ${token}`
      },
      json: true
    });
  }
}