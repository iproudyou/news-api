const router = require('express').Router()

router.use(
    '/',
    require("./users"),
    require("./news")
);

module.exports = router