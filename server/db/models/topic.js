'use strict';

module.exports = function (sequelize, DataTypes) {
    const Topic = sequelize.define('Topic',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            type_id: DataTypes.INTEGER,
            author_id: {type: DataTypes.INTEGER, defaultValue: true},
            views: DataTypes.INTEGER,
            likes: DataTypes.INTEGER
        },
        {
            classMethods: {
                associate: function (models) {
                    Topic.Type = Topic.belongsTo(models.Type, {foreignKey: 'type_id'});
                }
            },
            underscored: true,
            tableName: 'topics'
        });

    Topic.associate = function (models) {
        Topic.belongsTo(models.Type);
    };

    return Topic;
};