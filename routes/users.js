const express = require('express');
const router = express.Router();
const { celebrate } = require('celebrate');

const { logInSchema, signUpSchema } = require('../middleware/celebrateSchema/logInSchema')
const users = require('./users/');
const { auth } = require('../middleware/auth/auth');

// @desc    Shows all users
// @route   GET /users
router.get('/api/users', auth, users.getUsers)

// @desc    Shows single user
// @route   GET /users/:id
router.get('/api/users/:id', auth, users.getUser)
router.get('/api/user/auth/logout', auth, users.logOut)

// @desc    Process add user
// @route   POST /users/signup
router.post('/api/user/auth/login', celebrate(logInSchema), users.logIn)
router.post('/api/user/auth/signup', celebrate(signUpSchema), users.signUp)
router.post('/api/user/auth/signup/checkemail', users.checkEmailExist)

// @desc    Update user
// @route   PUT /users/:id
router.put('/api/users/:id', auth, users.updateUser)

// @desc    Delete user
// @route   DELETE /users/:id
router.delete('/api/users/:id', auth, users.deleteUser)

module.exports = router
