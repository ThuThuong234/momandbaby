'use strict';

module.exports = {
    up: (queryInterface) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        let t = new Date();

        let users = [
            { account: 'admin', fullname: 'Admin', password:'admin@123456', address: '12 Nguyen Van Bao , phuong 4,  Go Vap, Ho Chi Minh', phone: '', email:'admin@gmail.com', role_id: 1, created_at: t, updated_at: t },
            { account: 'thuongntt', fullname: 'Thuong Nguyen Thi Thu', password:'thuong@123456', address: '153 An Phu Dong 09, quan 12, Ho Chi Minh', phone: '0369615118', email:'', role_id: 2, created_at: t, updated_at: t },
            { account: 'lamnn', fullname: 'Lam Nguyen Ngoc', password:'lam@123456', address: '55-57 Bau Cat 4, Tan Binh, Ho Chi Minh', phone: '', email:'', role_id: 2, created_at: t, updated_at: t },
        ];

        return queryInterface.bulkInsert('users', users);
    },

    down: (queryInterface) => {

        return queryInterface.bulkDelete('users', null);
    }
};
