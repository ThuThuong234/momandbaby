'use strict';

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            account: DataTypes.STRING,
            fullname: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            active: {type: DataTypes.BOOLEAN, defaultValue: true},
            role_id: DataTypes.INTEGER,
            last_login: DataTypes.DATE,
            position_id: DataTypes.INTEGER,
            image_url: DataTypes.STRING
        },
        {
            classMethods: {
                associate: function (models) {
                    User.Role = User.belongsTo(models.Role, {foreignKey: 'role_id'});
                }
            },
            underscored: true,
            tableName: 'users'
        });

    User.associate = function (models) {
        User.belongsTo(models.Role);
    };

    return User;
};