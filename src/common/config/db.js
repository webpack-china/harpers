'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '',
      port: '',
      database: '',
      user: '',
      password: '',
      prefix: '',
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