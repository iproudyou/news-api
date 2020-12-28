const express = require('express')
const router = express.Router()
const products = require('./products/')

// @desc    Shows all products
// @route   GET /products
router.get('/products', products.getProducts)

// @desc    Shows single product
// @route   GET /products/:id
router.get('/products/:id', products.getProduct)

// @desc    Process add product
// @route   POST /products
router.post('/products', products.createProduct)

// @desc    Update product
// @route   PUT /products/:id
router.put('/products/:id', products.updateProduct)

// @desc    Delete product
// @route   DELETE /products/:id
router.delete('/products/:id', products.deleteProduct)

module.exports = router