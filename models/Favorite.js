const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {} Favorite.init({
    profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'profile',
            key: 'id'
        }
    },
    favorite_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite'
});

module.exports = Favorite;
