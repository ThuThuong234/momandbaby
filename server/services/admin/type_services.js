'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models');


exports.getALLTypes = function () {
    return new Promise(function (resolve, reject) {
        models.Type.findAll({
            attributes: ['id', 'name', 'parent_id'],
        })
            .then(result => {
                let types = result.map(type => {
                    return {
                        id: type.id,
                        name: type.name,
                        parent_id: type.parent_id,
                    };
                });
                return resolve(types);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};