'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '4320',
      database: 'harpers',
      user: 'root',
      password: 'root',
      prefix: 'harp_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};
    // mysql: {
    //   host: '119.29.118.119',
    //   port: '3306',
    //   database: 'harpers',
    //   user: 'lzhspace',
    //   password: 'lzh779877',
    //   prefix: 'harp_',
    //   encoding: 'utf8'
    // },