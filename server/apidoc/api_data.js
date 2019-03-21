define({ "api": [
  {
    "type": "get",
    "url": "/topics/latest",
    "title": "Get 10 Latest Topics",
    "version": "1.0.0",
    "group": "Topics",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": [\n    {\n        \"id\": 4,\n        \"title\": \"12345\",\n        \"content\": \"asdfghjkl\",\n        \"views\": null,\n        \"likes\": null,\n        \"shares\": null,\n       \"author\": \"Thuong Nguyen Thi Thu\",\n        \"type\": \"Kinh nghiệm hay\",\n        \"created_at\": \"2019-03-22T21:06:02.000Z\"\n   },\n    {\n        \"id\": 1,\n        \"title\": \"1 ngày làm mẹ\",\n        \"content\": \"<div class=\\\"postbody\\\"> <div class=\\\"postrow\\\">  <div class=\\\"content\\\"> <div id=\\\"post_message_36354571\\\"> <blockquote class=\\\"postcontent restore\\\"> <b>Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời, ăn thì ăn vậy thôi chứ ít ai b\",\n        \"views\": null,\n        \"likes\": null,\n        \"shares\": null,\n        \"author\": \"Admin\",\n        \"type\": \"Làm mẹ\",\n        \"created_at\": \"2019-03-21T21:06:02.000Z\"\n    }\n]\n}",
          "type": "json"
        },
        {
          "title": "Failed Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": false,\n  \"message\": \"Something wrong\",\n  \"code\": \"ERROR_CODE\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/topics.js",
    "groupTitle": "Topics",
    "name": "GetTopicsLatest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>API key to access the server</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/typesforMenu/",
    "title": "Get Type for Menu",
    "version": "1.0.0",
    "group": "Types",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": " HTTP/1.1 200 OK\n {\n \"success\": true,\n \"data\": [\n     {\n        \"id\": 1,\n         \"name\": \"Làm mẹ\",\n         \"children\": [\n             {\n                 \"id\": 9,\n                 \"name\": \"Trong khi mang thai\"\n            },\n              {\n                 \"id\": 10,\n                 \"name\": \"Chăm sóc bé 0-12 tháng\"\n             },\n             {\n                 \"id\": 11,\n                 \"name\": \"Nuôi dạy bé 1-3 tuổi\"\n             },\n            {\n                  \"id\": 12,\n                 \"name\": \"Nuôi dạy bé 5-13 tuổi\"\n             }\n         ]\n     },\n     {\n         \"id\": 2,\n         \"name\": \"Kinh nghiệm hay\",\n         \"children\": [\n             {\n                 \"id\": 13,\n                  \"name\": \"Mua sữa cho mẹ bầu\"\n                },\n           },\n             {\n                 \"id\": 14,\n                 \"name\": \"Mua sữa cho bé\"\n             },\n             {\n                 \"id\": 15,\n                 \"name\": \"Món ngon cho bé\"\n             }\n         ]\n     },\n     {\n         \"id\": 3,\n         \"name\": \"Sức khỏe\",\n         \"children\": [\n             {\n                 \"id\": 6,\n                 \"name\": \"Chữa bệnh cho bé\"\n             },\n             {\n                 \"id\": 7,\n                 \"name\": \"Chữa bệnh cho mẹ\"\n             }\n         ]\n     },\n     {\n         \"id\": 4,\n         \"name\": \"Giải trí\",\n         \"children\": [\n             {\n                 \"id\": 5,\n                 \"name\": \"Sách, truyện cho bé\"\n             }\n         ]\n     }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Failed Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": false,\n  \"message\": \"Something wrong\",\n  \"code\": \"ERROR_CODE\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Types",
    "name": "GetTypesformenu",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>API key to access the server</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Admin",
        "title": "Admin accounts access only",
        "description": "<p>Active users that belong to Admin Role</p>"
      }
    ],
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": {\n    \"id\": 1,\n    \"account\": \"admin\",\n    \"fullname\": \"Admin\",\n    \"address\": \"12 Nguyen Van Bao , phuong 4,  Go Vap, Ho Chi Minh\",\n    \"phone\": \"\",\n    \"role_id\": 1,\n    \"email\": \"admin@gmail.com\",\n    \"facebook_account\": \"\",\n    \"twitter_account\": \"\",\n    \"image_url\": null\n  }\n}",
          "type": "json"
        },
        {
          "title": "Failed Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": false,\n  \"message\": \"Something wrong\",\n  \"code\": \"ERROR_CODE\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "GetUsersId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>API key to access the server</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User token string to authorize</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>User account</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": {\n    \"id\": 2,\n    \"account\": \"thuongntt\",\n    \"fullname\": \"Thuong Nguyen Thi Thu\",\n    \"role\": {\n        \"code\": \"member\",\n        \"name\": \"Member\"\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiYWNjb3VudCI6InRodW9uZ250dCIsImZ1bGxuYW1lIjoiVGh1b25nIE5ndXllbiBUaGkgVGh1Iiwicm9sZSI6eyJjb2RlIjoibWVtYmVyIiwibmFtZSI6Ik1lbWJlciJ9LCJpYXQiOjE1NTMxOTg1MTYsImV4cCI6MTU1ODM4MjUxNn0.pogCJwMYCHHJgIW77zW5y2VNuIJQoC84It-xxb_9J6s\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Failed Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": false,\n  \"message\": \"Something wrong\",\n  \"code\": \"ERROR_CODE\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PostUsersLogin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-api-key",
            "description": "<p>API key to access the server</p>"
          }
        ]
      }
    }
  }
] });
