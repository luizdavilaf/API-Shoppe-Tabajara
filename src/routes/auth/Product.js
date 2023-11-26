const { Router } = require('express');
const router = Router();

const ProductController = require("../../controllers/ProductController")

router.post('/', ProductController.create);

router.get('/', ProductController.listAllByMerchant);


module.exports = router