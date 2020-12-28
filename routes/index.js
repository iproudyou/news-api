const express = require('express')
const router = express.Router()

router.use(
    '/',
    require("./products"),
    require("./users")
);

module.exports = router