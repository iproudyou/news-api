const UserDB = require('../../db/User')

exports.getAll = async () => {
    const result = await UserDB.find({}).lean()
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.getById = async (id) => {
    const result = await userDB.findById(id).lean()
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.create = async (user) => {
    const result = await UserDB.create(user)
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.updateById = async (id, updated) => {
    const result = UserDB.findOneAndUpdate({_id: id}, updated,
        {new: true})
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.deleteById = async (id) => {
    const result = UserDB.remove({_id: id}, {single: true})
    if (!result) {
        return null
    } else {
        return result
    }
}