const ProductService = require("../services/ProductService")
const Product = require("../models/Product")
const MerchantService = require("../services/MerchantService")
const CategoryService = require("../services/CategoryService")


const listAllByMerchant = async (req, res) => {
   
    try {
       //sort por preco, mais vendidos, mais recente, melhor avaliado
       // paginacao
        const merchantId = req.decoded.merchant.id
        const merchant = await MerchantService.findById(merchantId)
        if (!merchant) {
            throw new Error("estabelecimento não encontrado")
        }
        const products = await ProductService.findAllByMerchant(merchantId)
        res.json({
            success: true,
            data: products,           
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
        const merchantId = req.decoded.merchant.id
        const productObject = req.body
        if (!productObject.title || !productObject.price) {
            throw new Error("nome e preco sao obrigatórios")
        }               
        const merchant = await MerchantService.findById(merchantId)
        if(!merchant){
            throw new Error("estabelecimento não encontrado")
        }
        productObject.MerchantId = merchant.get("id")
        if (productObject.categoryId){
            const category = await CategoryService.findById(productObject.categoryId)
            productObject.CategoryId = category.get("id")
        }
        //console.log(productToSave)
        const product = await ProductService.create(productObject)
        res.json({
            success: true,
            data: product,
            message: "produto cadastrado criado com sucesso."
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
    listAllByMerchant
}