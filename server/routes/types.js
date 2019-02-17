var express = require('express');
var router = express.Router();
const typeServices = require('../services/type_services');
const constants = require('../config/constants');
const utils = require('../helper/api_helper');
const auth_utils = require('../config/auth_utils');


router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
