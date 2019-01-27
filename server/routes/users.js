var express = require('express');
var router = express.Router();
const userServices = require('../services/user_services');
const constants = require('../config/constants');
const utils = require('../helper/api_helper');
const auth_utils = require('../config/auth_utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
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

router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
