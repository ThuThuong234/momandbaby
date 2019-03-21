'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('conversations', {
          id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
          created_at: Sequelize.DATE,
          name: {type: Sequelize.STRING}

      })
          .then(function () {
              return queryInterface.createTable('messages', {
                  id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
                  created_at: Sequelize.DATE,
                  content: Sequelize.STRING,
                  conversation_id: {
                      type: Sequelize.INTEGER,
                      references: {model: 'conversations', key: 'id'}
                  },
                  user_id: {
                      type: Sequelize.INTEGER,
                      references: {model: 'users', key: 'id'}
                  }
              });
          });

  },

  down: (queryInterface) => {
      return queryInterface.dropTable('messages')
          .then(function () {
              return queryInterface.dropTable('conversations');
          });
  }
};
