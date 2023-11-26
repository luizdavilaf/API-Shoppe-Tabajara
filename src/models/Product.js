const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db/sequelize-connection")


class Product extends Model { }

Product.init({
    title: {
        type: DataTypes.STRING,
        comment: 'Nome do produto',
        allowNull: false,        
    },
    price: {
        type: DataTypes.DOUBLE,
        comment: 'preco do produto',
        allowNull: false,
    },
    avaliations: {
        type: DataTypes.DOUBLE,
        comment: 'media de avaliacoes do produto',
    },
    quantity_sold: {
        type: DataTypes.INTEGER,
        comment: 'quantidade de vendas do produto',
    },
    image:
    {
        type: DataTypes.STRING,
        comment: 'imagem do produto',
    },    
    description:
    {
        type: DataTypes.STRING,
        comment: 'descricao do produto',
    },
   
}, {
    sequelize,       
   
    
});

module.exports = Product;