/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

global.USER_TYPE = {
  NORMAL: 0,
  ADMIN: 1  //admin user
};

global.USER_STATUS = {
  NORMAL: 0,
  FORBIDDEN: 1  //user forbidden
};


global.OP = {
  QUESTION: {
    ADD: {
      op_name: 100,
      op_value: 10,
      op_label: 'Add Question'
    }
  }
}