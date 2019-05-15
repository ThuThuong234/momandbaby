'use strict';

const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models');
const errors = require('../lib/errors');
const dateTime = require('node-datetime');

exports.signup = function (fullname, account, password, address, email, facebook_account, twitter_account, phone, img_url) {
    return new Promise(function (resolve, reject) {
        models.User.findOne({
            attributes: ['email'],
            where: {
                $or: [
                    {
                        account:
                            {
                                $eq: account,
                            }
                    },
                    {
                        email:
                            {
                                $eq: email,
                            }
                    },

                ]
            }

        })
            .then(user => {
                if (user) {
                    throw {
                        message: errors.USER_01,
                        code: 'USER_01'
                    };
                }
                var dt = dateTime.create();
                var formatted = dt.format('Y-m-d H:M:S');
                return models.User.create({
                    created_at: formatted,
                    updated_ad:formatted,
                    account: account,
                    password: password,
                    fullname: fullname,
                    address: address,
                    phone: phone,
                    email: email,
                    facebook_account: facebook_account,
                    twitter_account: twitter_account,
                    image_url: img_url,
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
                    role: user.Role,
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
            attributes: ['id', 'account', 'fullname', 'address', 'phone', 'role_id', 'email', 'facebook_account', 'twitter_account', 'image_url']
        })
            .then(user => {
                // t vo roi nha
                if (user == null) {
                    throw {
                        message: errors.USER_02,
                        code: 'USER_02'
                    };
                }
                return resolve(user);
            })
            .catch(error => {
                console.log(error);
                logger.error(error);
                return reject(error);
            });
    });
};

exports.updateUser = function (userId, fullname, password,address, phone, facebook_account, twitter_account, image_url,active)
{
    return new Promise(function (resolve, reject) {
        console.log(userId);
        console.log(fullname);
        console.log(password);
        console.log(address);
        console.log(phone);
        console.log(facebook_account);
        console.log(twitter_account);
        console.log(image_url);
        console.log(active);
        models.User.findOne({
            attributes: ['email'],
            where: {
                id: userId
            }

        })
            .then(user => {
                console.log(user);
                if (user == null) {
                    throw {
                        message: errors.USER_02,
                        code: 'USER_02'
                    };
                }
                return models.User.update({
                    updated_at:new Date(),
                    last_login: new Date(),
                    password: password,
                    fullname: fullname,
                    address: address,
                    phone: phone,
                    facebook_account: facebook_account,
                    twitter_account: twitter_account,
                    image_url: image_url,
                    active: active
                },
                    {
                        where: { id: userId }
                    });
            })
            .then(result => {
                if (result == null) {
                    throw {
                        message: errors.UPDATE,
                        code: 'UPDATE'
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
