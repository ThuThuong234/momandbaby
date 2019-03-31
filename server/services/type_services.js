'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models/index');
const helpers = require('../helper/api_helper');
const errors = require('../lib/errors');


exports.getTypesForMenuBar = function () {
    return new Promise(function (resolve, reject) {
        models.Type.findAll({
            attributes: ['id', 'name', 'parent_id'],
            where: {
                parent_id: null
            },
            include: [
                {
                    model: models.Type,
                    required: false,
                    as: 'Children',
                    attributes: ['id', 'name', 'parent_id']
                }
            ]
        })
            .then(types => {
                let result = types.map(type => {
                    return {
                        id: type.id,
                        name: type.name,
                        children: type.Children.map(child => {
                            return {
                                id: child.id,
                                name: child.name,
                            };
                        })

                    }
                })
                return resolve(result);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};

exports.addCategory = function (name,parent_id) {
    return new Promise(function (resolve, reject) {
        models.Type.findOne({
            attributes: ['name'],
            where: {
                name: name,
            }

        })
            .then(type => {
                if (user) {
                    throw {
                        message: errors.CATEGORY_01,
                        code: 'CATEGORY_01'
                    };
                }
                var dt = dateTime.create();
                var formatted = dt.format('Y-m-d H:M:S');
                return models.Type.create({
                    created_at: formatted,
                    updated_ad:formatted,
                    name: name,
                    parent_id: parent_id
                });
            })
            .then(result => {
                if (result == null) {
                    throw {
                        message: errors.CREATE,
                        code: 'CREATE'
                    };
                }
                return resolve(result);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};

