const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');

router.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send('A token is required for authentication.');
    }
    try {
        req.decoded = {}
        req.decoded.merchant = jwt.verify(token, config.jwt_secret);
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
})


const product = require('./Product');
router.use('/products', product);


const category = require('./Category');
router.use('/categories', category);












module.exports = router