const MerchantService = require("../services/MerchantService")
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body
    try {
        if (!username || !password) {
            throw new Error("username e password sao obrigatórios")
        }
        const merchant = MerchantService.findByUsername(username)
        if (!merchant) {
            throw new Error("Usuário não encontrado.")
        }
        if (merchant.password !== password) {
            throw new Error("Senha incorreta.")
        }

        const token = jwt.sign(merchant, config.jwt_secret);
        res.status(200).send({ sucess: true, merchant, token });




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
    login
}