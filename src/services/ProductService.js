const Product = require("../models/Product")
const { Sequelize } = require("sequelize");
const Category = require("../models/Category")
const Merchant = require("../models/Merchant")




const create = async (object_product) => {
    //console.log(object_product)
    return Product.create(object_product)
}

const findAllByMerchant = (merchant_id, category_id) => {
    const query = {
        where: {
            MerchantId: merchant_id,           
        },
        raw: true,
    }
    if (category_id){
        query.where.CategoryId = category_id
    }
    return Product.findAll(query)
}


module.exports = {
    findAllByMerchant,
    create,    
}