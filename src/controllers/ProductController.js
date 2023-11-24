const MerchantService = require("../services/MerchantService")


const listAll = async (req, res) => {
   
    try {
       //sort por preco, mais vendidos, mais recente, melhor avaliado
       // paginacao




    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const create = async (req, res) => {
    try {
        const merchantObject = req.body
        if (!merchantObject.name || !merchantObject.username || !merchantObject.password) {
            throw new Error("name, username e password sao obrigatórios")
        }
        const merchant = await MerchantService.create(merchantObject)
        res.json({
            success: true,
            data: merchant,
            message: "Usuário criado com sucesso."
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