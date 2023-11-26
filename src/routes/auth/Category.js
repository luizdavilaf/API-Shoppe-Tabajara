const { Router } = require('express');
const router = Router();

const CategoryController = require("../../controllers/CategoryController")

router.post('/', CategoryController.create);

router.get('/', CategoryController.listAll);


module.exports = router