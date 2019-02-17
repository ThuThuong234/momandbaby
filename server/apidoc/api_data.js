define({ "api": [
  {
    "type": "get",
    "url": "/types/",
    "title": "",
    "version": "1.0.0",
    "group": "Types",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": {\n    \"id\": 9,\n    \"name\": \"Trong khi mang thai\",\n    \"parent_id\": 1\n    }\n  }\n}",
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
    "name": "GetTypes",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": {\n    \"account\": \"account\",\n    \"fullname\": \"User\",\n    \"role\": {\n      \"code\": \"user\"\n      \"name\": \"User\"\n    },\n    \"token\": \"abcdxfvz1234567--*324\"\n  }\n}",
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
