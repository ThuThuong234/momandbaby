'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models/index');

exports.successResponse = function (data = null) {
    if (data == null) {
        return {
            success: true
        };
    }

    return {
        success: true,
        data: data
    };
};

exports.failedResponse = function (error = null) {
    if (error != null) {
        if (error.name == 'SequelizeDatabaseError') {
            return {
                success: false,
                message: errors.SERVICE_01,
                code: 'SERVICE_01'
            };
        }

        if (error.name == 'JsonWebTokenError') {
            return {
                success: false,
                message: errors.AUTHORIZE_01,
                code: 'AUTHORIZE_01'
            };
        }

        if (error.message && error.code) {
            return {
                success: false,
                message: error.message,
                code: error.code
            };
        }

        if (error.message) {
            return {
                success: false,
                message: error.message,
                code: 'SERVICE_01'
            };
        }
    }

    return {
        success: false,
        message: errors.SERVICE_01,
        code: 'SERVICE_01'
    };
};

exports.getChildOfCategory = async function (type_id) {
    return new Promise(function (resolve, reject) {
        models.Type.findAll({
            attributes: ['id', 'name'],
            where: {
                parent_id: type_id
            }
        })
            .then(result => {
                let types = result.map(type => {
                    return {
                        name: type.name,
                    };
                });
                return resolve(types);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
}