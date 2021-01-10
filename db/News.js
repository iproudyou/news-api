const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    url: {
        type: String,
        unique: true,
    },
    source: {
        type: String,
    },
    author: {
        type: String,
    },
    publishedAt: {
        type: Date,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    urlToImage: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("News", NewsSchema);