const Product = require("../models/Product")
const { Sequelize } = require("sequelize");
const Category = require("../models/Category")
const Merchant = require("../models/Merchant")




const create = async (object_product) => {
    //console.log(object_product)
    return Product.create(object_product)
}

const findAllByMerchant = (merchant_id) => {
    return Product.findOne({
        where: {
            MerchantId: merchant_id,
        },
        raw: true,
    })
}







module.exports = {
    findAllByMerchant,
    create
}