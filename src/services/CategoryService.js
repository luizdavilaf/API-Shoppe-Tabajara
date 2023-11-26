const Category = require("../models/Category")
const { Sequelize } = require("sequelize");




const create = (object_category) =>{
    return Category.create(object_category)
}

const findById = (id) => {
    return Category.findByPk(id)

}

const listAll = () => {
    return Category.findAll({
        raw: true,
    })
}




module.exports = {
    findById,
    create,
    listAll
}