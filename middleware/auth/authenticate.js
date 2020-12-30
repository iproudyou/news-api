const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.get('server-api-key');
    if (!token) {
        return res.status(401).json('missing token');
    }

    // 2. decode the token
    const decodedToken = jwt.verify(
        token, 
        process.env.SERVER_API_KEY,
        (err, payload) => {
            if (err) {
                return res.sendStatus(401)
            }
            next()
        }
    )
}

module.exports = authenticate;