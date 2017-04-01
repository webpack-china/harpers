'use strict';
/**
 * config
 */
export default {
  route_on: true,
  resource_on: true,
  resource_reg: /^((?:static|doc)\/|[^\/]+\.(?!json|jpg|png|css|js|html)\w+$)/,
  login: {
    github: {
      client_id: '',  //github client id
      client_secret: '',//github client secret
      redirect_uri: ''  //github redirect uri xxx.com/api/user?_method=post&type=github
    }
  }
};