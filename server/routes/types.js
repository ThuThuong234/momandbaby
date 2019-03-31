var express = require('express');
var router = express.Router();
const typeServicesAdmin = require('../services/admin/type_services');
const typeServices = require('../services/type_services');
const constants = require('../config/constants');
const utils = require('../helper/api_helper');
const auth_utils = require('../config/auth_utils');
const errors = require('../lib/errors');
const {check, validationResult} = require('express-validator/check');

/**
 * @api {post} /types/ Add Category
 * @apiVersion 1.0.0
 * @apiGroup Types
 *
 * @apiUse AccessHeader
 *
 * @apiParam (Body) {String} name Category name
 * @apiParam (Body) {String} parent_id Category parent
 *
 * @apiSuccessExample {json} Success Response
 *  HTTP/1.1 200 OK
 *  {
 *    "success": true,
 *  }
 *  @apiUse FailedResponse
 */
router.post('/', [
    // if check, url, it can't be null?
    check('name').isLength({min: 1}).withMessage(errors.USER_EMAIL),
    check('parent_id').isLength({min: 1}).withMessage(errors.USER_EMAIL),
], (req, res) => {
    console.log("afdsf ");
    let name = req.body.name;
    let parent_id = req.body.parent_id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json(utils.failedResponse({errors: errors.array()}));
    }
    typeServicesAdmin.addCategory(name,parent_id)
        .then(data => {
            res.json(utils.successResponse());
        })
        .catch(error => {
            res.json(utils.failedResponse(error));
        });
});


module.exports = router;
