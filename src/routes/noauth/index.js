const { Router } = require('express');
const router = Router();


const merchant = require('./Merchant');
router.use('/merchants', merchant);





module.exports = router