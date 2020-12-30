const router = require('express').Router()

router.use(
    '/',
    require("./users"),
    require("./products")
);

module.exports = router