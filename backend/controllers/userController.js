const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' })
})

const getMe = asyncHadler(async (req, res) => {
  res.json({ message: 'User data display' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
