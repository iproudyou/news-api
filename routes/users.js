const express = require('express')
const router = express.Router()
const users = require('./users/')

// @desc    Shows all users
// @route   GET /users
router.get('/users', users.getUsers)

// @desc    Shows single user
// @route   GET /users/:id
router.get('/users/:id', users.getUser)

// @desc    Process add user
// @route   POST /users
router.post('/users', users.createUser)

// @desc    Update user
// @route   PUT /users/:id
router.put('/users/:id', users.updateUser)

// @desc    Delete user
// @route   DELETE /users/:id
router.delete('/users/:id', users.deleteUser)

module.exports = router
