var express = require('express');
var router = express.Router();
const topicServices = require('../services/topic_services');
const constants = require('../config/constants');
const utils = require('../helper/api_helper');
const auth_utils = require('../config/auth_utils');

/**
 * @api {get} /topics/latest  Get 10 Latest Topics
 * @apiVersion 1.0.0
 * @apiGroup Topics
 *
 * @apiUse AccessHeader
 *
 * @apiSuccessExample {json} Success Response
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": [
 *      {
 *          "id": 4,
 *          "title": "12345",
 *          "content": "asdfghjkl",
 *          "views": null,
 *          "likes": null,
 *          "shares": null,
 *         "author": "Thuong Nguyen Thi Thu",
 *          "type": "Kinh nghiệm hay",
 *          "created_at": "2019-03-22T21:06:02.000Z"
 *     },
 *      {
 *          "id": 1,
 *          "title": "1 ngày làm mẹ",
 *          "content": "<div class=\"postbody\"> <div class=\"postrow\">  <div class=\"content\"> <div id=\"post_message_36354571\"> <blockquote class=\"postcontent restore\"> <b>Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời, ăn thì ăn vậy thôi chứ ít ai b",
 *          "views": null,
 *          "likes": null,
 *          "shares": null,
 *          "author": "Admin",
 *          "type": "Làm mẹ",
 *          "created_at": "2019-03-21T21:06:02.000Z"
 *      }
 *  ]
 *  }
 *  @apiDefine FailedResponse
 */
router.get('/latest', function (req, res) {
    topicServices.getLatestTopics()
        .then(data => {
            res.json(utils.successResponse(data));
        })
        .catch(error => {
            res.json(utils.failedResponse(error));
        });
});

/**
 * @api {get} /topics/id  Get Topic By ID
 * @apiVersion 1.0.0
 * @apiGroup Topics
 *
 * @apiUse AccessHeader
 *
 * @apiSuccessExample {json} Success Response
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": {
 *      "id": 4,
 *      "title": "12345",
 *      "created_at": "2019-03-22T21:06:02.000Z",
 *      "content": "asdfghjkl",
 *      "views": 1,
 *      "likes": null,
 *      "shares": null,
 *      "User": "Thuong Nguyen Thi Thu",
 *      "Type": "Kinh nghiệm hay"
 *  }
 *  }
 *  @apiDefine FailedResponse
 */
router.get('/:id', function (req, res) {
    let requestId = req.params.id;
    topicServices.getTopicByID(requestId)
        .then(data => {
            res.json(utils.successResponse(data));
        })
        .catch(error => {
            res.json(utils.failedResponse(error));
        });
});

/**
 * @api {get} /topics/search/search_key  Get Topic By ID
 * @apiVersion 1.0.0
 * @apiGroup Topics
 *
 * @apiUse AccessHeader
 *
 * @apiSuccessExample {json} Success Response
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": [
 *      {
 *          "id": 1,
 *          "title": "1 ngày làm mẹ",
 *          "content": "<div class=\"postbody\"> <div class=\"postrow\">  <div class=\"content\"> <div id=\"post_message_36354571\"> <blockquote class=\"postcontent restore\"> <b>Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời, ăn thì ăn vậy thôi chứ ít ai b",
 *          "views": 9,
 *          "likes": null,
 *          "shares": null,
 *          "author": "Admin",
 *          "type": "Làm mẹ",
 *          "created_at": "2019-03-21T21:06:02.000Z"
 *      },
 *      {
 *          "id": 2,
 *          "title": "Sức khỏe cho mẹ trong 3 tháng đầu",
 *          "content": "<div class=\"postbody\"> <div class=\"postrow\">  <div class=\"content\"> <div id=\"post_message_36354571\"> <blockquote class=\"postcontent restore\"> <b>Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời, ăn thì ăn vậy thôi chứ ít ai b",
 *          "views": 7,
 *          "likes": null,
 *          "shares": null,
 *          "author": "Admin",
 *          "type": "Sức khỏe",
 *          "created_at": "2019-03-21T21:06:02.000Z"
 *      }
 *  ]
 *  }
 *  @apiDefine FailedResponse
 */
router.get('/search/:search_key', function (req, res) {
    let requestId = req.params.search_key;
    topicServices.searchTopic(requestId)
        .then(data => {
            res.json(utils.successResponse(data));
        })
        .catch(error => {
            res.json(utils.failedResponse(error));
        });
});


module.exports = router;