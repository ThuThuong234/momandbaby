var express = require('express');
var router = express.Router();
const userServices = require('../services/user_services');
const constants = require('../config/constants');
const utils = require('../helper/api_helper');
const auth_utils = require('../config/auth_utils');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/**
 * @api {post} /users/login Login
 * @apiVersion 1.0.0
 * @apiGroup Users
 *
 * @apiUse AccessHeader
 *
 * @apiParam (Body) {String} account User account
 * @apiParam (Body) {String} password User password
 *
 * @apiSuccessExample {json} Success Response
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": {
 *      "id": 2,
 *      "account": "thuongntt",
 *      "fullname": "Thuong Nguyen Thi Thu",
 *      "role": {
 *          "code": "member",
 *          "name": "Member"
 *      },
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiYWNjb3VudCI6InRodW9uZ250dCIsImZ1bGxuYW1lIjoiVGh1b25nIE5ndXllbiBUaGkgVGh1Iiwicm9sZSI6eyJjb2RlIjoibWVtYmVyIiwibmFtZSI6Ik1lbWJlciJ9LCJpYXQiOjE1NTMxOTg1MTYsImV4cCI6MTU1ODM4MjUxNn0.pogCJwMYCHHJgIW77zW5y2VNuIJQoC84It-xxb_9J6s"
 *    }
 *  }
 * @apiUse FailedResponse
 */
router.post('/login', function (req, res) {
    let account = req.body.account;
    let password = req.body.password;
    userServices.login(account, password)
        .then(data => {
            res.json(utils.successResponse(data));
        })
        .catch(error => {
            res.json(utils.failedResponse(error));
        });
});

/**
 * @api {get} /users/:id Get User
 * @apiVersion 1.0.0
 * @apiPermission Admin
 * @apiGroup Users
 *
 * @apiUse TokenHeader
 *
 * @apiParam {Number} id User Id
 *
 * @apiSuccessExample {json} Success Response
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": {
 *      "id": 1,
 *      "account": "admin",
 *      "fullname": "Admin",
 *      "address": "12 Nguyen Van Bao , phuong 4,  Go Vap, Ho Chi Minh",
 *      "phone": "",
 *      "role_id": 1,
 *      "email": "admin@gmail.com",
 *      "facebook_account": "",
 *      "twitter_account": "",
 *      "image_url": null
 *    }
 *  }
 * @apiUse FailedResponse
 */
router.get('/:id', auth_utils.authorizeMember, function (req, res) {
    let userId = req.params.id;
    userServices.getUser(userId)
        .then(data => {
            res.json(utils.successResponse(data));
        })
        .catch(error => {
            res.json(utils.failedResponse(error));
        });
});


router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
