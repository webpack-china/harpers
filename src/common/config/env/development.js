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
      client_id: '20bfe0d90962d479a5d2',
      client_secret: '0ea59158b99cf15f58cd28f54892810ca019637b',
      redirect_uri: 'http://local.webpack-china.org:9000/api/user?_method=post&type=github'
    }
  }
};  