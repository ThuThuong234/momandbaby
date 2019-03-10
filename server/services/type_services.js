'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models/index');
const helpers = require('../helper/api_helper');


exports.getTypesForMenuBar = function () {
    return new Promise(function (resolve, reject) {
        models.Type.findAll({
            attributes: ['id', 'name', 'parent_id'],
            where:{
                parent_id: null
            }
        })
            .then(result => {
                let types = result.map(type => {
                    // var child = await (helpers.getChildOfCategory(type.id));
                    return {
                        id: type.id,
                        name: type.name,
                        // child: child,
                    };
                });

                // console.log(types);
                return resolve(types);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};

