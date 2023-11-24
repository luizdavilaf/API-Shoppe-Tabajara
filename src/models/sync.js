const sequelize = require("../db/sequelize-connection");

const Merchant = require('./Merchant');







console.log('Sync Models');
sequelize.sync();

