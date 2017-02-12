define({ "api": [  {    "type": "GET",    "url": "/question",    "title": "获取问题列表",    "group": "Question",    "version": "0.0.1",    "filename": "src/api/logic/question.js",    "groupTitle": "Question",    "name": "GetQuestion",    "sampleRequest": [      {        "url": "/api/question"      }    ]  },  {    "type": "GET",    "url": "/question/:id",    "title": "获取问题详情",    "group": "Question",    "version": "0.0.1",    "filename": "src/api/logic/question.js",    "groupTitle": "Question",    "name": "GetQuestionId",    "sampleRequest": [      {        "url": "/api/question/:id"      }    ]  },  {    "type": "POST",    "url": "/question",    "title": "新增问题",    "group": "Question",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>问题标题</p>"          },          {            "group": "Parameter",            "type": "String[]",            "optional": false,            "field": "tag",            "description": "<p>问题标签</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "markdown_content",            "description": "<p>问题内容</p>"          }        ]      }    },    "filename": "src/api/logic/question.js",    "groupTitle": "Question",    "name": "PostQuestion",    "sampleRequest": [      {        "url": "/api/question"      }    ]  },  {    "type": "DELETE",    "url": "/tag/:id",    "title": "删除标签",    "group": "Tag",    "version": "0.0.1",    "filename": "src/api/logic/tag.js",    "groupTitle": "Tag",    "name": "DeleteTagId",    "sampleRequest": [      {        "url": "/api/tag/:id"      }    ]  },  {    "type": "GET",    "url": "/tag",    "title": "获取标签列表",    "group": "Tag",    "version": "0.0.1",    "filename": "src/api/logic/tag.js",    "groupTitle": "Tag",    "name": "GetTag",    "sampleRequest": [      {        "url": "/api/tag"      }    ]  },  {    "type": "GET",    "url": "/tag/:id",    "title": "获取标签",    "group": "Tag",    "version": "0.0.1",    "filename": "src/api/logic/tag.js",    "groupTitle": "Tag",    "name": "GetTagId",    "sampleRequest": [      {        "url": "/api/tag/:id"      }    ]  },  {    "type": "POST",    "url": "/tag",    "title": "添加标签",    "group": "Tag",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>标签名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>标签描述</p>"          }        ]      }    },    "filename": "src/api/logic/tag.js",    "groupTitle": "Tag",    "name": "PostTag",    "sampleRequest": [      {        "url": "/api/tag"      }    ]  },  {    "type": "PUT",    "url": "/tag/:id",    "title": "修改标签",    "group": "Tag",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>标签名称</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>标签描述</p>"          }        ]      }    },    "filename": "src/api/logic/tag.js",    "groupTitle": "Tag",    "name": "PutTagId",    "sampleRequest": [      {        "url": "/api/tag/:id"      }    ]  },  {    "type": "DELETE",    "url": "/token",    "title": "用户登出",    "group": "User",    "version": "0.0.1",    "filename": "src/api/logic/token.js",    "groupTitle": "User",    "name": "DeleteToken"  },  {    "type": "GET",    "url": "/user",    "title": "获取用户列表",    "group": "User",    "version": "0.0.1",    "filename": "src/api/logic/user.js",    "groupTitle": "User",    "name": "GetUser",    "sampleRequest": [      {        "url": "/api/user"      }    ]  },  {    "type": "GET",    "url": "/user/:id",    "title": "获取用户信息",    "group": "User",    "version": "0.0.1",    "filename": "src/api/logic/user.js",    "groupTitle": "User",    "name": "GetUserId",    "sampleRequest": [      {        "url": "/api/user/:id"      }    ]  },  {    "type": "POST",    "url": "/token",    "title": "用户登陆",    "group": "User",    "version": "0.0.1",    "description": "<p>第三方登陆需要跳转，非纯接口形式</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "type",            "defaultValue": "github",            "description": "<p>第三方注册类型</p>"          }        ]      }    },    "filename": "src/api/logic/token.js",    "groupTitle": "User",    "name": "PostToken"  },  {    "type": "POST",    "url": "/user",    "title": "用户注册",    "group": "User",    "version": "0.0.1",    "description": "<p>第三方账号注册需要跳转，非纯接口形式</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "type",            "defaultValue": "github",            "description": "<p>第三方注册类型</p>"          }        ]      }    },    "filename": "src/api/logic/user.js",    "groupTitle": "User",    "name": "PostUser"  }] });
