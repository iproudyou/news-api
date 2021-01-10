const NewsDB = require('../../db/News')

exports.getAll = async () => {
    const result = await NewsDB.find({}).lean();
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.getById = async (id) => {
    const result = await NewsDB.findById(id).lean()
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.create = async (news) => {
    try {
        const newArticle = await NewsDB.create(news);
        newArticle.save()
        return newArticle
    } catch (err) {
        throw err
    }
}

exports.updateById = async (id, updated) => {
    const result = NewsDB.findOneAndUpdate({_id: id}, updated, 
        {new: true})
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.removeById = async (id) => {
    const result = NewsDB.remove({_id: id}, {single: true})
    if (!result) {
        return null
    } else {
        return result
    }
}

exports.getByUrl= async (url) => {
    const result = await NewsDB.findOne({url: url}).lean()

    if (!result) {
        return null
    } else {
        return new NewsDB(result);
    }
}


