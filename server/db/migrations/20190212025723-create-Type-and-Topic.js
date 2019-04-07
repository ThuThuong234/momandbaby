'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('types', {
          id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
          created_at: Sequelize.DATE,
          updated_at: Sequelize.DATE,
          name: {type: Sequelize.STRING},
          parent_id: {
              type: Sequelize.INTEGER,
              references: {model: 'types', key: 'id'},
          },
      })
          .then(function () {
              return queryInterface.createTable('topics', {
                  id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
                  created_at: Sequelize.DATE,
                  updated_at: Sequelize.DATE,
                  title: {type: Sequelize.STRING, allowNull: false},
                  content: {type: Sequelize.STRING, allowNull: false},
                  summary: {type: Sequelize.STRING, allowNull: false},
                  img: {type: Sequelize.STRING, allowNull: false},
                  status: Sequelize.INTEGER,
                  type_id: {
                      type: Sequelize.INTEGER,
                      references: {model: 'types', key: 'id'},
                  },
                  author_id: {
                      type: Sequelize.INTEGER,
                      references: {model: 'users', key: 'id'},
                  },
                  views: {type: Sequelize.INTEGER},
                  shares: {type: Sequelize.INTEGER},
                  likes: {type: Sequelize.INTEGER}
              });
          });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('topics')
          .then(function () {
              return queryInterface.dropTable('types');
          });
  }
};
