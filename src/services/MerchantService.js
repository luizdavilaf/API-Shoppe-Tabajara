const Merchant = require("../models/Merchant")
const { Sequelize } = require("sequelize");

const findByUsername = (username) => {
    return Merchant.findOne({
        where: {username},
        raw: true
    })

}

const findById = (id) => {
    return Merchant.findByPk(id)

}


const create = (object_merchant) =>{
    return Merchant.create(object_merchant)
}







module.exports = {
    findByUsername,
    create,
    findById
}