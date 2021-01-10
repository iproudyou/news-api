const loginTokenDB = require('../../db/loginTokens');
const CreateError = require('http-error');

exports.create = async (loginToken) => {
    try {
        const newLoginToken = new loginTokenDB(loginToken)
        newLoginToken.save()
        return newLoginToken
    } catch (err) {
        return CreateError.BadRequest('create: newLoginToken not saved')
    }
}

exports.getByUserId= async (userId) => {
    const result = await loginTokenDB.findOne({userId: userId}).lean()
    if (!result) {
        return null
    } else {
        return new loginTokenDB(result);
    }
}

exports.deleteAllByUserId = async (userId) => {
    try {
        const result = await loginTokenDB.deleteMany({userId: userId}).lean()
        return result;
    } catch (err) {
        return new CreateError.BadRequest("Token not removed")
    }
}