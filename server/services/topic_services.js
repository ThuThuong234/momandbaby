'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger();
const Promise = require('bluebird');
const auth_utils = require('../config/auth_utils');
const models = require('../db/models/index');
const helpers = require('../helper/api_helper');
const errors = require('../lib/errors');
const Op = (require('sequelize')).Op;

exports.getLatestTopics = async function () {
    return new Promise(function (resolve, reject) {
        models.Topic.findAll({
            attributes: ['id', 'title', 'created_at', 'content', 'views', 'likes', 'shares','summary','img'],
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
            limit: 10,
            order: [['created_at', 'DESC']],
        })
            .then(topics => {

                console.log(topics);
                let result = topics.map(topic => {
                    return {
                        id: topic.id,
                        title: topic.title,
                        content: topic.content,
                        summary: topic.summary,
                        img: topic.img,
                        views: topic.views,
                        likes: topic.likes,
                        shares: topic.shares,
                        author: topic.User.fullname,
                        type: topic.Type.name,
                        created_at: topic.created_at,

                    }
                });
                return resolve(result);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};

exports.getTopicByID = function (id) {
    return new Promise(function (resolve, reject) {
        models.Topic.findOne({
            attributes: ['id', 'title', 'created_at', 'content', 'views', 'likes', 'shares','summary','img'],
            include: [
                {
                    model: models.User,
                    required: true,
                    attributes: ['id', 'fullname'],
                    as: 'User'
                },
                {
                    model: models.Type,
                    required: false,
                    attributes: ['id', 'name']
                }
            ],
            where: {
                id: id
            }
        })
            .then(topic => {
                if (topic == null) {
                    throw {
                        message: errors.TOPIC_01,
                        code: 'TOPIC_01'
                    };
                }
                return {
                    id: topic.id,
                    title: topic.title,
                    created_at: topic.created_at,
                    content: topic.content,
                        summary: topic.summary,
                        img: topic.img,
                    views: topic.views,
                    likes: topic.likes,
                    shares: topic.shares,
                    User: topic.User.fullname,
                    Type: topic.Type.name
                }
            })
            .then(topic => {
                models.Topic.update(
                    {
                        views: ++topic.views,
                    },
                    {
                        where: {id: topic.id}
                    }
                );
                return resolve(topic);
            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            });
    });
};

exports.searchTopic = function (search_key){
    return new Promise(function (resolve, reject) {
        models.Topic.findAll({
            attributes: ['id', 'title', 'created_at', 'content', 'views', 'likes', 'shares','summary','img'],
            include: [
                {
                    model: models.User,
                    required: true,
                    attributes: ['id', 'fullname'],
                    as: 'User'
                },
                {
                    model: models.Type,
                    required: false,
                    attributes: ['id', 'name']
                }
            ],
            where: {
                title:{ [Op.like]: '%'+search_key+'%' }
            }
        })
            .then(topics => {
                if (JSON.stringify(topics) === '[]') {
                    throw {
                        message: errors.TOPIC_01,
                        code: 'TOPIC_01'
                    };
                }
                console.log(topics);
                let result = topics.map(topic => {
                    return {
                        id: topic.id,
                        title: topic.title,
                        content: topic.content,
                        summary: topic.summary,
                        img: topic.img,
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

