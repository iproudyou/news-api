const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Article", ArticleSchema);