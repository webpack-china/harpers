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

globa.QUESTION_STATUS = {
  NORMAL: 0,
  CLOSE: 1,
  AUDITING: 2,
  AUDIT_FAIL: 3,
  HIDE: 4,
  REPORT: 5
};

global.OP = {
  USER: {
    ADD: {
      op_name: 50,
      op_value: 100,
      op_label: 'User Sign Up'
    }
  },
  QUESTION: {
    ADD: {
      op_name: 100,
      op_value: 10,
      op_label: 'Add Question'
    },
    UPDATE: {
      op_name: 101,
      op_value: 0,
      op_label: 'Update Question'
    },
    DELETE: {
      op_name: 102,
      op_value: -5,
      op_label: 'Delete Question'
    },
    HIDE: {
      op_name: 103,
      op_value: 0,
      op_label: 'Hide Question'
    },
    CLOSE: {
      op_name: 104,
      op_value: 0,
      op_label: 'Close Question'
    }
  },
  ANSWER: {
    ADD: {
      op_name: 150,
      op_value: 10,
      op_label: 'Add Answer'
    },
    UPDATE: {
      op_name: 151,
      op_value: 0,
      op_label: 'Update Answer'
    },
    DELETE: {
      op_name: 152,
      op_value: -5,
      op_label: 'Delete Answer'
    }
  },
  TAG: {
    ADD: {
      op_name: 200,
      op_value: 0,
      op_label: 'Add Tag'
    },
    UPDATE: {
      op_name: 201,
      op_value: 0,
      op_label: 'Update Tag'
    },
    DELETE: {
      op_name: 203,
      op_value: 0,
      op_label: 'Delete Tag'
    }
  }
}