const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../db/sequelize-connection")


class Merchant extends Model { }

Merchant.init({
    name: {
        type: DataTypes.STRING,
        comment: 'Nome do estabelecimento',   
        allowNull: false,            
    },
    username:
    {
        type: DataTypes.STRING,
        comment: 'login do usuario',
        allowNull: false,
    },
    password:
    {
        type: DataTypes.STRING,
        comment: 'senha do usuario',
        allowNull: false,
    },    
    last_activity:
    {
        type: DataTypes.DATE,
        comment: 'ultima atividade',
    },
    avaliations:
    {
        type: DataTypes.DOUBLE,
        comment: 'avaliacao',        
    },
    followers:
    {
        type: DataTypes.INTEGER,
        comment: 'avaliacao',
    },
    image:
    {
        type: DataTypes.STRING,
        comment: 'imagem do estabelecimento',
    },
}, {
    sequelize,       
   
    
});

module.exports = Merchant;