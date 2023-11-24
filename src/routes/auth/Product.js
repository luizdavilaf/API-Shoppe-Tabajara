const { Router } = require('express');
const router = Router();

const ProductController = require("../../controllers/ProductController")

router.post('/', ProductController.create);

router.post('/login', ProductController.listAll);


module.exports = router