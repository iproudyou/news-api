const ProductDB = require('../../db/Product')

exports.getAll = async () => {
    const result = await ProductDB.find({}).lean();
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.getById = async (id) => {
    const result = await ProductDB.findById(id).lean()
    console.log(result)
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.create = async (product) => {
    const result = await ProductDB.create(product)
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.updateById = async (id, updated) => {
    const result = ProductDB.findOneAndUpdate({_id: id}, updated, 
        {new: true})
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.removeById = async (id) => {
    const result = ProductDB.remove({_id: id}, {single: true})
    if (!result) {
        return null
    } else {
        return result
    }
}



