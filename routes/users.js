const express = require('express');
const router = express.Router();
const { celebrate, Joi, errors } = require('celebrate');
const passport = require('passport');

const { signInSchema, signUpSchema } = require('../middleware/celebrateSchema/signInSchema')
const authenticate = require('../middleware/auth/authenticate')
const users = require('./users/');

// @desc    Shows all users
// @route   GET /users
router.get('/api/users', users.getUsers)

// @desc    Shows single user
// @route   GET /users/:id
router.get('/api/users/:id', users.getUser)

// @desc    Process add user
// @route   POST /users/signup
router.post('/api/user/auth/signin', authenticate, celebrate(signInSchema), users.signIn)
router.post('/api/user/auth/signup', celebrate(signUpSchema), users.signUp)
router.post('/api/user/auth/signup/checkemail', users.checkEmailExist)

// @desc    Update user
// @route   PUT /users/:id
router.put('/api/users/:id', users.updateUser)

// @desc    Delete user
// @route   DELETE /users/:id
router.delete('/api/users/:id', users.deleteUser)

module.exports = router
