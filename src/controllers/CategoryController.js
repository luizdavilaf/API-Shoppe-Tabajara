const CategoryService = require("../services/CategoryService")



const listAll = async (req, res) => {

    try {
        const categories = await CategoryService.listAll()
        res.json({
            success: true,
            data: categories,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const create = async (req, res) => {
    try {
        const categoryObject = req.body
        if (!categoryObject.title) {
            throw new Error("title sao obrigatórios")
        }
        const merchant = await CategoryService.create(categoryObject)
        res.json({
            success: true,
            data: merchant,
            message: "categoria criada com sucesso."
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }


}



module.exports = {
    create,
    listAll
}