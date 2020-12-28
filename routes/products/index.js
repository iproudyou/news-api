const Product = require('../../db/Product');
const productModel = require('../../models/products/')

exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.getAll()

        if (!products) {
            return res.status(400).json({
                success: false,
                message: 'Products Not Found'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: products
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }
}

exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await productModel.getById(id)

        if (!product) {
            return res.status(400).json({
                success: false,
                message: 'Product Not Found'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: product
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const { title, description, price } = req.body
        
        const newProduct = {
            title,
            description,
            price
        }

        const product = await productModel.create(newProduct)
        if (!product) {
            return res.status(400).json({
                success: false,
                message: 'Product Not Created'
            })
        } else {
            return res.status(201).json({
                success: true,
                data: product
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const updated = req.body

        const product = await productModel.updateById(id, updated)

        if (!product) {
            return res.status(400).json({
                success: false,
                message: 'Product Not Updated'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: product
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id

        const deleted = await productModel.removeById(id)

        if (deleted.deletedCount === 0) {
            return res.status(400).json({
                success: false,
                message: 'User Not Deleted'
            })
        } else {
            return res.status(200).json({
                success: true,
                data: deleted.deletedCount
            })
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }
}

