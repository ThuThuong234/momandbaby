define({ "api": [
  {
    "type": "get",
    "url": "/users/options",
    "title": "Get Users For Select",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Hr"
      }
    ],
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": [{\n    \"id\": 5,\n    \"fullname\": \"Micky Mouse\"\n  }]\n}",
          "type": "json"
        },
        {
          "title": "Failed Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": false,\n  \"message\": \"Something wrong\",\n  \"code\": \"ERROR_CODE\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/apidoc.js",
    "groupTitle": "Users",
    "name": "GetUsersOptions",
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
  }
] });
