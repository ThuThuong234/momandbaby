var express = require('express');
var router = express.Router();
const typeServices = require('../services/type_services');
const constants = require('../config/constants');
const utils = require('../helper/api_helper');
const auth_utils = require('../config/auth_utils');

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @api {get} /types/
 * @apiVersion 1.0.0
 * @apiGroup Types
 *
 * @apiUse AccessHeader
 *
 * @apiSuccessExample {json} Success Response
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *    "data": {
 *      "id": 9,
 *      "name": "Trong khi mang thai",
 *      "parent_id": 1
 *      }
 *    }
 *  }
 * @apiUse FailedResponse
 */
router.get('/types', auth_utils.authorizeHeader, function(req, res) {
    typeServices.getTypesForMenuBar()
        .then(data => {
            res.json(utils.successResponse(data));
        })
        .catch(error => {
            res.json(utils.failedResponse(error));
        });
});
module.exports = router;
