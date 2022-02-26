const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');

router.post('/add-product', product.create);
router.post('/products/edit/:id', product.update);
router.get('/products/:id', product.findOne);
router.get('/products/', product.getProducts);
router.delete('/products/delete/:id', product.removeOne);

module.exports = router;