const { Router } = require('express');
const router = Router();

const MerchantController = require("../../controllers/MerchantController")

router.post('/', MerchantController.create);

router.post('/login', MerchantController.login);


module.exports = router