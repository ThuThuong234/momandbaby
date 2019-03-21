'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models');

exports.login = function (account, password) {
    return new Promise(function (resolve, reject) {
        models.User.findOne({
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
                console.log("user ");
                console.log(user);
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
exports.getUser = function (id) {
    return new Promise(function (resolve, reject) {
        models.User.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'account', 'fullname','address','phone', 'role_id','email','facebook_account','twitter_account','image_url']
        })
            .then(user => {
                if (user == null) {
                    throw {
                        message: errors.USER_02,
                        code: 'USER_02'
                    };
                }
                return resolve(user);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};