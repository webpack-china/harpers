'use strict';
/**
 * config
 */
export default {
  db: {
    type: 'mysql',
    adapter: {
      mysql: {
        host: '127.0.0.1',
        port: '3306',
        database: 'harpers',
        user: 'root',
        password: 'root',
        prefix: 'harp_',
        encoding: 'utf8mb4'
      }
    }
  },
  login: {
    github: {
      client_id: '8ab7559db6dc0f628965',
      client_secret: '9d05920df97b02e43af056e6fa27d00612c91b25',
      redirect_uri: 'http://ming.li:8361/api/user?_method=post'
    }
  }
};