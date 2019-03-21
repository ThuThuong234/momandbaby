'use strict';

module.exports = {
    up: (queryInterface) => {
        let t = new Date();

        let conversations = [
            {name: 'Group1', created_at: t },
            {name: 'Group2', created_at: t },
            {name: 'Group3', created_at: t },
            {name: 'Group4', created_at: t },
            {name: 'Group5', created_at: t },
        ];

        return queryInterface.bulkInsert('conversations', conversations);
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('conversations', null);
    }
};
