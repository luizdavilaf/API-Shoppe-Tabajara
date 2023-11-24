const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db/sequelize-connection")


class Category extends Model { }

Category.init({
    title: {
        type: DataTypes.STRING,
        comment: 'Nome da categoria',
        allowNull: false,
    }

}, {
    sequelize,


});

module.exports = Category;