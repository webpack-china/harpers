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
      client_id: '59c521e73350de0bb59b',
      client_secret: '816cecef4cb535f2bab57dd44397fd98388326d7',
      redirect_uri: 'http://local.webpack-china.org:9000/api/user?_method=post&type=github'
    }
  }
};  