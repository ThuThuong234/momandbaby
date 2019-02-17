'use strict';

module.exports = function (sequelize, DataTypes) {
    const Type = sequelize.define('Type',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            parent_id: DataTypes.STRING,
            name: DataTypes.STRING
        },{
            classMethods: {
                associate: function (models) {
                    Type.Type = Type.belongsTo(models.Type, {foreignKey: 'parent_id'});
                }
            },
            underscored: true,
            tableName: 'types'
        });

    Type.associate = function (models) {
        Type.Topics = Type.hasMany(models.Topic, { foreignKey: 'type_id' });
        Type.Topics = Type.hasMany(models.Type, { foreignKey: 'parent_id' });
        Type.belongsTo(models.Type);
    };

    return Type;
};