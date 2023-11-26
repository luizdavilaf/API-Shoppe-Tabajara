const sequelize = require("../../db/sequelize-connection");

const Merchant = require('./Merchant');
const Category = require('./Category');
const Product = require('./Product');

Product.belongsTo(Merchant)
Product.belongsTo(Category)

Merchant.hasMany(Product)
Category.hasMany(Product)



console.log('Sync Models');
sequelize.sync();

