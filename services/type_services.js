'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models');


exports.getALLTypes = function () {
    return new Promise(function (resolve, reject) {
        models..findOne({
            where: {
                account: account,
                password: password
            },
            attributes: ['id', 'account', 'fullname'],
            include: [
                {
                    model: models.Role,
                    required: false,
                    attributes: ['code', 'name']
                }
            ]
        })
            .then(user => {
                if (user == null) {
                    throw {
                        message: errors.AUTHENTICATE_01,
                        code: 'AUTHENTICATE_01'
                    };
                }
                let resultData = {
                    id: user.id,
                    account: user.account,
                    fullname: user.fullname,
                    role: user.Role
                };
                let token = auth_utils.getToken(resultData);
                resultData.token = token;

                user.last_login = new Date();
                return Promise.all([resultData, user.save()]);
            })
            .then(([resultData]) => {
                return resolve(resultData);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};