const express = require('express');
const router = express.Router();

const news = require('./news/');
const { auth } = require('../middleware/auth/auth');

// @desc    Shows all news
// @route   GET /news
router.get('/api/news', auth, news.getAllNews)

// @desc    Shows single news
// @route   GET /news/:id
router.get('/api/news/:id', auth, news.getNews)

// @desc    Process add news
// @route   POST /news
router.post('/api/news', news.createNews)

// @desc    Update news
// @route   PUT /news/:id
router.put('/api/news/:id', auth, news.updateNews)

// @desc    Delete news
// @route   DELETE /news/:id
router.delete('/api/news/:id', auth, news.deleteNews)

module.exports = router