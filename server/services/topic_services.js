'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models/index');
const helpers = require('../helper/api_helper');


exports.getLatestTopics = async function () {
    return new Promise(function (resolve, reject) {
        models.Topic.findAll({
            attributes: ['id','title', 'created_at','content','views','likes','shares'],
            include: [
                {
                    model: models.User,
                    required: false,
                    attributes: ['id', 'fullname']
                },
                {
                    model: models.Type,
                    required: false,
                    attributes: ['id', 'name']
                }
            ],
            limit: 2,
            order: [['created_at', 'DESC']],
        })
            .then(topics => {

                console.log(topics);
                let result = topics.map(topic => {
                    return {
                        id: topic.id,
                        title: topic.title,
                        content: topic.content,
                        views: topic.views,
                        likes: topic.likes,
                        shares: topic.shares,
                        author: topic.User.fullname,
                        type: topic.Type.name,
                        created_at: topic.created_at,

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

