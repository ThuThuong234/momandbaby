'use strict';

module.exports = {
    up: (queryInterface) => {
        let t = new Date();

        let messages = [
            {content: 'hahhahah', created_at: t, conversation_id: 1, user_id: 1 },
            {content: 'heheheh', created_at: t, conversation_id: 1, user_id: 2 },
            {content: 'kakka', created_at: t, conversation_id: 2, user_id: 2 },
            {content: 'mamamam', created_at: t, conversation_id: 2, user_id: 3 },
            {content: 'hichic', created_at: t, conversation_id: 3, user_id: 3 },
            {content: 'huhuh', created_at: t, conversation_id: 3, user_id: 3 },
            {content: 'lala', created_at: t, conversation_id: 4, user_id: 2 },
            {content: 'kkekekek', created_at: t, conversation_id: 4, user_id: 1 },
            {content: 'Tui muốn có nhiều tiền', created_at: t, conversation_id: 4, user_id: 1 },
        ];

        return queryInterface.bulkInsert('messages', messages);
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('messages', null);
    }
};
